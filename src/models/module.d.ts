export as namespace models;

export type User = {
  id?: string | '';
  name: string | '';
  email: string | '';
  password: string | '';
  profileType?: number | 1;
};

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: models.User;
};

export type AuthRequest = {
  email: string | null;
  password: string | null;
};

export type AuthResponse = {
  id?: string;
  token: string | null;
};
