import {
  TICKET_DETAIL, TICKET_REPORT,
} from './actionTypes';
import TicketRequests from '../repositories/ticket';
import { addLoading, removeLoading } from './loading';
import * as MessageService from '../services/message';

export const cleanDetail = () => async (
  dispatch: any,
) => {
  await dispatch({
    type: TICKET_DETAIL,
    payload: null,
  });
};

export const create = (params: models.Ticket) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await TicketRequests.create(params);

    dispatch({
      type: TICKET_DETAIL,
      payload,
    });
    MessageService.show('Ingresso reservado com sucesso!')
  } catch (err) {
    MessageService.error('Houve um erro ao comprar o ingresso.');
  } finally {
    dispatch(removeLoading());
  }
};

export const getReport = (params: models.TicketGetRequest) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await TicketRequests.getReport(params);

    dispatch({
      type: TICKET_REPORT,
      payload,
    });
  } catch (err) {
    MessageService.error('Houve um erro ao carregar os ingressos.');
  } finally {
    dispatch(removeLoading());
  }
};

export const getDetail = (id: string) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await TicketRequests.getDetail(id);

    dispatch({
      type: TICKET_DETAIL,
      payload,
    });
  } catch (err) {
    MessageService.error('Houve um erro ao carregar o ingresso.');
  } finally {
    dispatch(removeLoading());
  }
};

export const update = (id?: string, params?: any) => async (
  dispatch: any,
) => {
  dispatch(addLoading());
  try {
    const payload = await TicketRequests.update(id, params);

    dispatch({
      type: TICKET_DETAIL,
      payload,
    });
  } catch (err) {
    MessageService.error('Não foi possível alterar o ingresso.');
  } finally {
    dispatch(removeLoading());
  }
};

export const remove = (id: string) => async (
  dispatch: any
) => {
  dispatch(addLoading());
  try {
    await TicketRequests.remove(id);
  } catch (err) {
    MessageService.error('Não foi possível apagar o ingresso.');
  } finally {
    dispatch(removeLoading());
  }
};
