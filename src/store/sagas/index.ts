import { fork } from 'redux-saga/effects';
import { watchTodoList } from 'store/sagas/todo';

function* rootSaga() {
  yield fork(watchTodoList);
}

export default rootSaga;
