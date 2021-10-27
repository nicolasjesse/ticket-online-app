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

export const getReport = () => async (
  dispatch: any,
) => {
  const payload = await EventRequests.getReport();

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
