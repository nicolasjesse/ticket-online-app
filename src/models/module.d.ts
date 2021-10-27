export as namespace models;

export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  profileType: number;
};

export type Event = {
  id?: string;
  name: string;
  local: string;
  date: string;
  schedule: string;
  price: number;
  quantity: number;
  eventType: number;
  userId: string;
};

export type Ticket = {
  paymentStatus: number;
  userId: string;
  eventId: string;
};

export type AuthRequest = {
  email: string | null;
  password: string | null;
};

export type AuthResponse = {
  id?: string;
  token: string | null;
};
