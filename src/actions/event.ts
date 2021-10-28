import {
  EVENT_DETAIL, EVENT_REPORT,
} from './actionTypes';
import EventRequests from '../repositories/event';
import { addLoading, removeLoading } from './loading';
import * as MessageService from '../services/message';

export const cleanDetail = () => async (
  dispatch: any,
) => {
  await dispatch({
    type: EVENT_DETAIL,
    payload: null,
  });
};

export const create = (params: models.Event) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await EventRequests.create(params);

    dispatch({
      type: EVENT_DETAIL,
      payload,
    });
    MessageService.show('Evento criado com sucesso!')
  } catch (err) {
    MessageService.error('Houve um problema ao criar o evento.');
  } finally {
    dispatch(removeLoading());
  }
};

export const getReport = (params: models.EventGetRequest) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await EventRequests.getReport(params);

    dispatch({
      type: EVENT_REPORT,
      payload,
    });
  } catch (err) {
    MessageService.error('Houve um problema ao carregar os eventos.');
  } finally {
    dispatch(removeLoading());
  }
};

export const getDetail = (id: string) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await EventRequests.getDetail(id);

    dispatch({
      type: EVENT_DETAIL,
      payload,
    });
  } catch (err) {
    MessageService.error('Houve um problema ao carregar o evento.');
  } finally {
    dispatch(removeLoading());
  }
};

export const update = (id?: string, params?: any) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await EventRequests.update(id, params);

    dispatch({
      type: EVENT_DETAIL,
      payload,
    });
  } catch (err) {
    MessageService.error('Não foi possível atualizar o evento.');
  } finally {
    dispatch(removeLoading());
  }
};

export const remove = (id: string) => async (
  dispatch: any
) => {
  dispatch(addLoading());
  try {
    await EventRequests.remove(id);
  } catch (err) {
    MessageService.error('Não foi possível apagar o evento.');
  } finally {
    dispatch(removeLoading());
  }
};
