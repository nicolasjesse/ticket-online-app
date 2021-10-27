import getInstance from './instance';
import { API_URL } from '../config/env.json';

const AuthApi = {
  login: async (userData: models.AuthRequest) => {
    const instance = await getInstance();

    const { data } = await instance.post(`${API_URL}/auth/login`, userData);

    return data;
  },
  me: async (id: string) => {
    const instance = await getInstance();

    const { data } = await instance.get(`${API_URL}/users/${id}`);

    return data;
  },
  register: async (userData: models.User) => {
    const instance = await getInstance();

    const { data } = await instance.post(`${API_URL}/users/create`, userData);

    return data;
  },
};

export default AuthApi;
