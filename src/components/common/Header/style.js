import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  ${({ theme }) => theme.common.flexSpaceBetween}
  width: inherit;
  height: 48px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
`