import axios from 'axios';
import { store } from '@/state/store';

const apiUrl = 'https://truthful-simplicity-production.up.railway.app/';

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = store.getState().token.value;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
