import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../styles/theme';

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.border};
  padding: 30px 16px 26px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  gap: 41px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const Count = styled.strong`
  color: ${({ right }) =>
    right ? theme.palette.mediumGray : theme.palette.black};
  font-family: Pretendard-M;
  font-size: 18px;
  line-height: 23px;
`;

export const CountInfo = styled.span`
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 10px;
  line-height: 12px;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const Name = styled.strong`
  padding-top: 16px;
  color: ${({ theme }) => theme.palette.black};
  font-family: Pretendard-B;
  font-size: 16px;
  line-height: 20px;
`;

export const AccountName = styled.strong`
  padding-top: 6px;
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 12px;
  line-height: 14px;

  &::before {
    content: '@ ';
  }
`;

export const Intro = styled.p`
  padding-top: 16px;
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 14px;
  line-height: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 24px;
`;

export const MyProfileButton = styled.button`
  padding: 8px 26px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 14px;
  line-height: 18px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 30px;
`;

export const YourProfileButton = styled.button`
  padding: 8px 40px;
  background-color: ${({ theme, isfollow }) =>
    isfollow ? theme.palette.white : theme.palette.primary};
  color: ${({ theme, isfollow }) =>
    isfollow ? theme.palette.mediumGray : theme.palette.white};
  font-size: 14px;
  line-height: 18px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 30px;
`;

export const IconButton = styled.button`
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.border};
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
