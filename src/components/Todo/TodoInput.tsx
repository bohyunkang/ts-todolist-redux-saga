import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/actions/todo';
import { currentDate } from 'utils/getDate';
import { list } from 'types';

interface TodoItemProps {
  todos: list;
}

const TodoInput: React.FC<TodoItemProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState<string>('');

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputTodo(e.currentTarget.value);
  };

  const onRegisterTodo: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    const todoLength = todos.length;
    const nextId = todoLength ? Number(todos[todoLength - 1].id) + 1 : 1;

    if (inputTodo.length === 0) return alert('할 일을 입력해주세요!');

    const newTodo = {
      id: String(nextId),
      content: inputTodo,
      isCheck: false,
      createdAt: currentDate(),
    };

    dispatch(addTodo(newTodo));
    setInputTodo('');
  };

  return (
    <TodoInputWrapper>
      <Input
        required
        value={inputTodo}
        onChange={onChangeInput}
        placeholder="할 일을 입력해주세요..."
      />
      <Button type="submit" onClick={onRegisterTodo}>
        추가
      </Button>
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
  background-color: ${({ theme }) => theme.color.sub};
  color: white;
  border-radius: 0 6px 6px 0;
`;
