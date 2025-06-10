import { api } from './api';

interface GetPostInput {
  limits?: string;
  page?: string;
  type: 'recommended' | 'most-liked';
}

export const getPosts = async ({
  limits = '5',
  page = '1',
  type,
}: GetPostInput) => {
  const response = await api.get(`/posts/${type}`, {
    params: {
      limits,
      page,
    },
  });
  return response.data;
};
