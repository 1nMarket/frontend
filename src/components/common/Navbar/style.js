import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  min-width: 390px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  padding: 10px 35px;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  background-color: ${({ theme }) => theme.palette.white};
  z-index: 110;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavIconText = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.mediumGray};
  &.active {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;
