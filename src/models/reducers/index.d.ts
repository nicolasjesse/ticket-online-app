export as namespace reducers;

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: models.User;
};

export type EventReducer = {
  list: models.Event[];
  detail: models.Event;
};

export type TicketReducer = {
  list: models.Ticket[];
  detail: models.Ticket;
};

export type LoadingReducer = {
  amount: number;
};

export type RootReducer = {
  auth: AuthReducer;
  event: EventReducer;
  ticket: TicketReducer;
  loading: LoadingReducer;
};
