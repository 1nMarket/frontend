import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchList = styled.ul`
  padding: 12px 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
`;

export const SearchItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  font-size: 14px;
`;

export const AccountName = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.mediumGray};
`;
