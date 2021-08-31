import React from 'react';
import styled from 'styled-components';
import TodoItem from 'components/TodoItem';

const TodoList: React.FC = () => {
  return (
    <TodoListWrapper>
      <TodoItem />
    </TodoListWrapper>
  );
};
export default TodoList;

const TodoListWrapper = styled.ul`
  height: 74vh;
  padding: 0 ${({ theme }) => theme.layout.padding};
  overflow-y: auto;
`;
