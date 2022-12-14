import styled from 'styled-components';

export const NavWrapper = styled.nav`
  width: inherit;
  position: fixed;
  bottom: 0;
  height: 60px;
  padding: 10px 30px 10px 35px;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
`;

export const NavList = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;`;

export const NavItem = styled.li``;


