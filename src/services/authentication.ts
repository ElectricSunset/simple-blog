import { api } from './api';

export const authLogin = async (email: string, password: string) => {
  const response = await api.post('/auth/login', {
    email,
    password,
  });
  return response.data;
};

export const authRegister = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await api.post('/auth/register', {
    name,
    email,
    password,
  });
  return response.data;
};
