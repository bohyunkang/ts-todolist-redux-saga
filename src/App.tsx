import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadList } from 'store/actions/todo';
import TodoTemplate from 'components/Todo/TodoTemplate';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList());
  }, []);

  return (
    <TodoContainer>
      <TodoTemplate />
    </TodoContainer>
  );
};
export default App;

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
