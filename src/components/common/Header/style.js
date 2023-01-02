import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  ${({ theme }) => theme.common.flexSpaceBetween}
  min-width: 390px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.white};
`;
