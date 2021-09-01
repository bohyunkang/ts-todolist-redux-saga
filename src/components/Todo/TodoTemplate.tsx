import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import TodoList from 'components/Todo/TodoList';

const TodoTemplate: React.FC = () => {
  return (
    <TodoTemplateWrapper>
      <Header />
      <TodoList />
    </TodoTemplateWrapper>
  );
};
export default TodoTemplate;

const TodoTemplateWrapper = styled.div`
  width: 500px;
  height: 700px;
  backdrop-filter: blur(18px) saturate(136%);
  -webkit-backdrop-filter: blur(18px) saturate(136%);
  background-color: rgba(255, 255, 255, 0.29);
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px solid ${({ theme }) => theme.color.borderLine};
`;
