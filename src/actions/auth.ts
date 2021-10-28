import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthApi from '../repositories/auth';
import {
  AUTH_CHECK_LOGGED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ME,
} from './actionTypes';
import { addLoading, removeLoading } from './loading';
import * as MessageService from '../services/message';

export const getMe = (id: string) => async (
  dispatch: any,
) => {
  const payload: models.User = await AuthApi.me(id);

  dispatch({
    type: AUTH_ME,
    payload,
  });
};

export const checkLogged = () => async (
  dispatch: any,
) => {
  const token = await AsyncStorage.getItem('@userToken');

  dispatch({
    payload: token,
    type: AUTH_LOGIN,
  });

  dispatch({
    type: AUTH_CHECK_LOGGED,
    payload: !!token,
  });
};

export const authenticate = (userData: models.AuthRequest) => async (
  dispatch: any,
) => {
  try {
    const payload: models.AuthResponse = await AuthApi.login(userData);
    await AsyncStorage.setItem('@userToken', payload.token!);

    dispatch({
      type: AUTH_LOGIN,
      payload,
    });

    await dispatch(checkLogged());
    if (payload.id) {
      await dispatch(getMe(payload.id));
    }
  } catch (err) {
    MessageService.error('Não foi possível fazer o login.');
  }
};

export const register = (userData: models.User) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    await AuthApi.register(userData);
  } catch (err) {
    MessageService.error('Não foi possível fazer o cadastro.');
  } finally {
    dispatch(removeLoading());
  }
};

export const logout = () => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    await AsyncStorage.removeItem('@userToken');

    dispatch({
      type: AUTH_LOGOUT,
    });
  } finally {
    dispatch(removeLoading());
  }

};
