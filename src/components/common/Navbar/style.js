import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  width: inherit;
  position: fixed;
  bottom: 0;
  height: 60px;
  padding: 10px 30px 10px 35px;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  background-color: ${({ theme }) => theme.palette.white};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavIconText = styled.p`
  font-size: 10px;
  color: ${({theme}) => theme.palette.mediumGray}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;


