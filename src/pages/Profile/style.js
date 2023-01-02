import styled from 'styled-components';

export const Content = styled.main`
  min-width: 390px;
  width: 100%;
  padding: 48px 0 60px;
  background-color: ${({ theme }) => theme.palette.bg};
`;
