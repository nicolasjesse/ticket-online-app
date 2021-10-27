import {
  TICKET_REPORT, TICKET_DETAIL,
} from '../actions/actionTypes';

const initialState: reducers.TicketReducer = {
  list: [],
  detail: {
    id: '',
    userId: '',
    eventId: '',
    event: {
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
    paymentStatus: 0,
  },
};

const ticketReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case TICKET_REPORT:
      return {
        ...state,
        list: action.payload,
      };
    case TICKET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
