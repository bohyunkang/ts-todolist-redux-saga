import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return <HeaderWrapper>TO DO LIST</HeaderWrapper>;
};

const HeaderWrapper = styled.h1`
  font-size: ${({ theme }) => theme.font.headerSize};
  font-weight: ${({ theme }) => theme.font.bold};
  padding-top: ${({ theme }) => theme.layout.padding};
  text-align: center;
`;

export default Header;
