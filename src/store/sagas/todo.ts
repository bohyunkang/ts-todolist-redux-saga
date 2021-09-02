import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from 'store/actions/types';
import { fetchList } from 'store/actions/todo';
import { requestTodos, requestAddTodo } from 'service/api';

// 투두리스트 초기 데이터 불러오기
export function* getTodoList() {
  try {
    const response: AxiosResponse = yield call(requestTodos);
    yield put(fetchList(response.data));
  } catch (error) {
    console.error('투두리스트 로드 에러 >>', error);
  }
}

// 투두리스트 항목 추가
export function* addTodo() {
  try {
    const response: AxiosResponse = yield call(requestAddTodo);
    console.log(response.data.msg);
  } catch (error) {
    console.error('투두리스트 추가 에러 >>', error);
  }
}

export function* watchTodoList() {
  yield takeLatest(types.LOAD_LIST, getTodoList);
  yield takeLatest(types.ADD_TODO, addTodo);
}
