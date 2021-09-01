import { TodoAction } from 'store/actions/todo';
import * as types from 'store/actions/types';
import { list } from 'types';
import { getStorage, setStorage, removeTodoStorage } from 'utils/storage';

const initialState: list = [];

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case types.LOAD_LIST: {
      const loadTodos = getStorage('todos') || [];
      return loadTodos;
    }
    case types.ADD_TODO: {
      const newTodo = [...state, action.payload];
      setStorage('todos', newTodo);
      return newTodo;
    }
    case types.TOGGLE_TODO: {
      const checkTodo = state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCheck: action.payload.isCheck,
          };
        }
        return todo;
      });
      setStorage('todos', checkTodo);
      return checkTodo;
    }
    case types.MODIFY_TODO: {
      const modifyTodo = state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            content: action.payload.content,
          };
        }
        return todo;
      });
      setStorage('todos', modifyTodo);
      return modifyTodo;
    }
    case types.REMOVE_TODO:
      removeTodoStorage(action.payload);
      return state.filter(todo => todo.id !== action.payload);
    case types.FETCH_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
