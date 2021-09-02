import axios, { AxiosResponse } from 'axios';
import { Itodo } from 'types';

const BASE_URL = 'http://localhost:4000';

export const requestTodos = async (): Promise<AxiosResponse> => {
  const response = await axios.get(`${BASE_URL}/todo`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response;
};

export const requestAddTodo = async (): Promise<AxiosResponse> => {
  const response = await axios.post(`${BASE_URL}/todo`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    content: 'string',
  });
  return response;
};
