import { api } from './api';

export const getUserInfo = async (email: string) => {
  const response = await api.get(`/users/${email}`);
  return response.data;
};
