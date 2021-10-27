import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

import { API_URL } from '../config/env.json';

export async function getInstance() {
  const accessToken = await AsyncStorage.getItem('@userToken');

  const axiosInstance = Axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken!,
    },
    timeout: 10000,
  });

  return axiosInstance;
}

export default getInstance;
