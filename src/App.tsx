import React from 'react';
import styled from 'styled-components';
import TodoTemplate from 'components/TodoTemplate';

const App: React.FC = () => {
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
