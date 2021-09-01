import React from 'react';
import styled from 'styled-components';
import TodoInput from 'components/Todo/TodoInput';
import TodoItem from 'components/Todo/TodoItem';
import { useSelector } from 'react-redux';
import { rootState } from 'store/reducers';

const TodoList: React.FC = () => {
  const todos = useSelector((state: rootState) => state.todos);

  return (
    <>
      <TodoInput todos={todos} />
      <TodoItemWrapper>
        {todos &&
          todos.map((todo, idx) => {
            return <TodoItem key={idx} todo={todo} />;
          })}
      </TodoItemWrapper>
    </>
  );
};
export default TodoList;

const TodoItemWrapper = styled.ul`
  height: 57vh;
  padding: 0 ${({ theme }) => theme.layout.padding};
  overflow-y: auto;
`;
