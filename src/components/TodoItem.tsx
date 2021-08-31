import React from 'react';
import styled from 'styled-components';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoItem: React.FC = () => {
  return (
    <TodoItemWrapper>
      <CheckTodoIcon>
        <CheckOutlined />
      </CheckTodoIcon>
      <Text>투두리스트</Text>
      <DeleteTodoIcon>
        <DeleteOutlined />
      </DeleteTodoIcon>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.layout.padding} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderLine};
`;

const CheckTodoIcon = styled.div`
  margin-right: ${({ theme }) => theme.layout.margin};
`;

const Text = styled.div`
  flex: 1;
`;

const DeleteTodoIcon = styled.div``;
