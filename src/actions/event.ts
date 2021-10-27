import {
  EVENT_DETAIL, EVENT_REPORT,
} from './actionTypes';
import EventRequests from '../repositories/event';

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
  const payload = await EventRequests.create(params);

  dispatch({
    type: EVENT_DETAIL,
    payload,
  });
};

export const getReport = (params: models.EventGetRequest) => async (
  dispatch: any,
) => {
  const payload = await EventRequests.getReport(params);

  dispatch({
    type: EVENT_REPORT,
    payload,
  });
};

export const getDetail = (id: string) => async (
  dispatch: any,
) => {

  const payload = await EventRequests.getDetail(id);

  dispatch({
    type: EVENT_DETAIL,
    payload,
  });
};

export const update = (id?: string, params?: any) => async (
  dispatch: any,
) => {
  const payload = await EventRequests.update(id, params);

  dispatch({
    type: EVENT_DETAIL,
    payload,
  });
};

export const remove = (id: string) => async () => {
  await EventRequests.remove(id);
};
