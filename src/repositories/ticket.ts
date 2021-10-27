import getInstance from './instance';
import { API_URL } from '../config/env.json';

const TicketApi = {
  getReport: async (params: models.TicketGetRequest) => {
    const instance = await getInstance();

    const { data } = await instance.get(`${API_URL}/tickets`, { params });

    return data;
  },
  getDetail: async (id: string) => {
    const instance = await getInstance();

    const { data } = await instance.get(`${API_URL}/tickets/${id}`);

    return data;
  },
  create: async (params: models.Ticket) => {
    const instance = await getInstance();

    const { data } = await instance.post(`${API_URL}/tickets/`, params);

    return data;
  },
  remove: async (id: string) => {
    const instance = await getInstance();

    const { data } = await instance.delete(`${API_URL}/tickets/${id}`);

    return data;
  },
  update: async (id?: string, params?: any) => {
    const instance = await getInstance();

    const { data } = await instance.put(`${API_URL}/tickets/${id}`, params);

    return data;
  },
};

export default TicketApi;
