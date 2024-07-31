import apiClient from './axios';

export const getAllBoards = async ({ userId }) => {
  const response = await apiClient.get(`/boards?userId=${userId}`);
  if (response.status === 200) {
    return response?.data?.body;
  }
  return null;
};

export const createBoard = async ({ name, userId }) => {
  const response = await apiClient.post(`/boards?userId=${userId}`, { name });
  if (response.status === 201) {
    return response?.data?.body;
  }
  return null;
};
