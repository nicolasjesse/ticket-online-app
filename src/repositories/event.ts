import getInstance from './instance';
import { API_URL } from '../config/env.json';

const EventApi = {
  getReport: async () => {
    const instance = await getInstance();

    const { data } = await instance.get(`${API_URL}/events`);

    return data;
  },
  getDetail: async (id: string) => {
    const instance = await getInstance();

    const { data } = await instance.get(`${API_URL}/events/${id}`);

    return data;
  },
  create: async (params: models.Event) => {
    const instance = await getInstance();

    const { data } = await instance.post(`${API_URL}/events/`, params);

    return data;
  },
  remove: async (id: string) => {
    const instance = await getInstance();

    const { data } = await instance.delete(`${API_URL}/events/${id}`);

    return data;
  },
  update: async (id?: string, params?: any) => {
    const instance = await getInstance();

    const { data } = await instance.put(`${API_URL}/events/${id}`, params);

    return data;
  },
};

export default EventApi;
