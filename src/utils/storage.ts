import { Itodo } from 'types';

type StorageValue = Itodo[] | null;

export const setStorage = (key: string, value: StorageValue): void => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};

export const removeTodoStorage = (id: string) => {
  const todos = getStorage('todos');
  const newTodos = todos.filter((todo: { id: string }) => todo.id !== id);
  setStorage('todos', newTodos);
  return newTodos;
};
