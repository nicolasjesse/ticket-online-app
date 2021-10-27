import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthApi from '../repositories/auth';
import {
  AUTH_CHECK_LOGGED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ME,
} from './actionTypes';

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
};

export const register = (userData: models.User) => async () => {
  await AuthApi.register(userData);
};

export const logout = () => async (
  dispatch: any,
) => {
  await AsyncStorage.removeItem('@userToken');

  dispatch({
    type: AUTH_LOGOUT,
  });
};
