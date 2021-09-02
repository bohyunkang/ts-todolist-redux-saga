import * as types from './types';
import { Itodo, list, checkTodo, editTodo } from 'types';

// 액션 생성 함수
// 투두 추가
export const addTodo = (Itodo: Itodo) => ({
  type: types.ADD_TODO,
  payload: Itodo,
});

// 투두 완료 토글
export const toggleTodo = (checkTodo: checkTodo) => ({
  type: types.TOGGLE_TODO,
  payload: checkTodo,
});

// 투두 수정
export const modifyTodo = (editTodo: editTodo) => ({
  type: types.MODIFY_TODO,
  payload: editTodo,
});

// 투두 삭제
export const removeTodo = (id: string) => ({
  type: types.REMOVE_TODO,
  payload: id,
});

// 투두 불러오기
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
