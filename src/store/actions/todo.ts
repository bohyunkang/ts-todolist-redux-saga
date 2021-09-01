import * as types from './types';
import { Itodo, list, checkTodo, editTodo } from 'types';

export const addTodo = (Itodo: Itodo) => ({
  type: types.ADD_TODO,
  payload: Itodo,
});

export const toggleTodo = (checkTodo: checkTodo) => ({
  type: types.TOGGLE_TODO,
  payload: checkTodo,
});

export const modifyTodo = (editTodo: editTodo) => ({
  type: types.MODIFY_TODO,
  payload: editTodo,
});

export const removeTodo = (id: string) => ({
  type: types.REMOVE_TODO,
  payload: id,
});

export const loadList = () => ({
  type: types.LOAD_LIST,
});

export const fetchList = (list: list) => ({
  type: types.FETCH_LIST,
  payload: list,
});

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof modifyTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof loadList>
  | ReturnType<typeof fetchList>;
