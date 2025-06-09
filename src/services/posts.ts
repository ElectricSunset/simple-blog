import { api } from './api';

export const getRecommendedPost = async (
  limits: number = 5,
  page: number = 1
) => {
  const response = await api.get('/posts/recommended', {
    params: {
      limits,
      page,
    },
  });
  return response.data;
};
