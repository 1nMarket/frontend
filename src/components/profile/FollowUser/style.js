import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const User = styled.li`
  ${({ theme }) => theme.common.flexSpaceBetween}
  padding: 8px 16px;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
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
  justify-content: center;
  gap: 6px;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  color: ${({ theme }) => theme.palette.black};
  font-family: Pretendard-M;
  font-size: 14px;
  line-height: 18px;
`;

export const UserIntro = styled.p`
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const FollowButton = styled.button`
  width: 56px;
  padding: 5px 0;
  border-radius: 26px;
  font-size: 12px;
  line-height: 15px;
`;
