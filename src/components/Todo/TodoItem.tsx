import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, modifyTodo } from 'store/actions/todo';
import { Itodo, checkTodo, editTodo } from 'types';
import {
  CheckOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

interface TodoItemProps {
  todo: Itodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [modifyValue, setModifyValue] = useState<string>(todo.content);
  const [isModify, setIsModify] = useState<boolean>(false);

  const onToggleTodo = () => {
    const checkTodo: checkTodo = { id: todo.id, isCheck: !todo.isCheck };
    dispatch(toggleTodo(checkTodo));
  };

  const onModifyMode = () => {
    setIsModify(true);
  };
  const onModifyTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setModifyValue(value);
  };
  const onEditSaveButton = () => {
    const editTodo: editTodo = { id: todo.id, content: modifyValue };
    setIsModify(false);
    dispatch(modifyTodo(editTodo));
  };

  const onRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <TodoItemWrapper>
      {isModify ? (
        <EditWrapper>
          <EditInput type="text" value={modifyValue} onChange={onModifyTodo} />
          <EditSave type="submit" onClick={onEditSaveButton}>
            <CheckCircleOutlined />
          </EditSave>
        </EditWrapper>
      ) : (
        <>
          <CheckTodoIcon isCheck={todo.isCheck} onClick={onToggleTodo}>
            {todo.isCheck && <CheckOutlined />}
          </CheckTodoIcon>
          <Text isCheck={todo.isCheck}>{todo.content}</Text>
          <EditOutlined onClick={onModifyMode} />
          <DeleteTodoIcon onClick={onRemoveTodo}>
            <DeleteOutlined />
          </DeleteTodoIcon>
        </>
      )}
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
const EditWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const EditInput = styled.input`
  padding: 0 ${({ theme }) => theme.layout.padding};
  width: 80%;
  height: 30px;
  font-size: 18px;
  background-color: white;
  border-radius: 6px;
`;

const EditSave = styled.button`
  width: 20px;
  height: 20px;
`;

const CheckTodoIcon = styled.div<{ isCheck: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.layout.margin};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.sub};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.isCheck &&
    css`
      border: 1px solid ${({ theme }) => theme.color.checkedLine};
      color: ${({ theme }) => theme.color.checkedLine};
    `}
`;

const Text = styled.span<{ isCheck: boolean }>`
  flex: 1;
  ${props =>
    props.isCheck &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.checkedLine};
    `}
`;

const DeleteTodoIcon = styled.div`
  margin-left: ${({ theme }) => theme.layout.margin};
`;
