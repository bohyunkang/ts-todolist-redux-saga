import { combineReducers } from 'redux';
import { list } from 'types';
import todoReducer from './todo';

export interface rootState {
  todos: list;
}

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
