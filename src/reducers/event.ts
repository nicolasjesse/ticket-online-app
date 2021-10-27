import {
  EVENT_REPORT, EVENT_DETAIL,
} from '../actions/actionTypes';

const initialState: reducers.EventReducer = {
  list: [],
  detail: {
    id: '',
    name: '',
    local: '',
    date: '',
    schedule: '',
    price: 0,
    quantity: 0,
    eventType: 0,
    userId: '',
  },
};

const eventReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case EVENT_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case EVENT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
