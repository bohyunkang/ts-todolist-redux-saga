import React from 'react';
import styled from 'styled-components';

const TodoInput: React.FC = () => {
  return (
    <TodoInputWrapper>
      <Input placeholder="할 일을 입력해주세요..." />
      <Button>추가</Button>
    </TodoInputWrapper>
  );
};

export default TodoInput;

const TodoInputWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.layout.padding};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderLine};
`;

const Input = styled.input`
  height: 45px;
  font-size: 18px;
  width: 80%;
  padding: 10px ${({ theme }) => theme.layout.padding};
  background-color: white;
  border-radius: 6px 0 0 6px;
`;

const Button = styled.button`
  height: 45px;
  font-size: 18px;
  width: 20%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.button};
  color: white;
  border-radius: 0 6px 6px 0;
`;
