import styled from 'styled-components';

export const Content = styled.main`
  min-width: 390px;
  min-height: 100vh;
  width: 100%;
  padding: 48px 0 60px;
  background-color: ${({ theme }) => theme.palette.bg};

  @media screen and (max-width: 300px) {
    min-height: 100svh;
  }
`;
