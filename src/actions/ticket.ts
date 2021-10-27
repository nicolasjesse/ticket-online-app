import {
  TICKET_DETAIL, TICKET_REPORT,
} from './actionTypes';
import TicketRequests from '../repositories/ticket';

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
  const payload = await TicketRequests.create(params);

  dispatch({
    type: TICKET_DETAIL,
    payload,
  });
};

export const getReport = (params: models.TicketGetRequest) => async (
  dispatch: any,
) => {
  const payload = await TicketRequests.getReport(params);

  dispatch({
    type: TICKET_REPORT,
    payload,
  });
};

export const getDetail = (id: string) => async (
  dispatch: any,
) => {

  const payload = await TicketRequests.getDetail(id);

  dispatch({
    type: TICKET_DETAIL,
    payload,
  });
};

export const update = (id?: string, params?: any) => async (
  dispatch: any,
) => {
  const payload = await TicketRequests.update(id, params);

  dispatch({
    type: TICKET_DETAIL,
    payload,
  });
};

export const remove = (id: string) => async () => {
  await TicketRequests.remove(id);
};
