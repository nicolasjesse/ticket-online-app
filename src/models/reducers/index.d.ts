export as namespace reducers;

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: models.User;
};

export type AuthResponse = {
  token: string | null;
};

export type RootReducer = {
  auth: AuthReducer;
};
