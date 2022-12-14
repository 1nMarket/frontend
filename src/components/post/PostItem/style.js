import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalIcon from '../../../assets/icons/icon-more-vertical.svg';

export const PostArticle = styled.article`
  width: 100%;
  margin-bottom: 25px;
  position: relative;
`;

export const AuthorInfo = styled.section`
  margin-bottom: 12px;
`;

export const AuthorProfileLink = styled(Link)`
  color: ${({ theme }) => theme.palette.black};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const AuthorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  font-family: Pretendard-M;
  font-size: 14px;
  line-height: 18px;
`;

export const AccountName = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.mediumGray};

  &::before {
    content: '@';
  }
`;

export const PostContent = styled.section`
  padding-left: 55px;
`;

export const PostText = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const LikeCommentCount = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 18px;
`;

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${({ theme }) => theme.palette.mediumGray};
  background-color: ${({ theme }) => theme.palette.white};
  border: none;
  font-size: 12px;
  line-height: 12px;
`;

export const CommentLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 12px;
  line-height: 12px;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.palette.mediumGray};
  font-size: 10px;
  line-height: 12px;
`;

export const RightIcon = styled.img.attrs({
  src: ModalIcon,
  alt: '모달창',
})`
  position: absolute;
  top: 5px;
  right: 0;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
