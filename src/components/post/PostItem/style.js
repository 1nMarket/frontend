<<<<<<< HEAD
=======
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalIcon from '../../../assets/icons/icon-more-vertical.svg';

export const PostArticle = styled.article`
  width: 100%;
  margin-bottom: 20px;
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
`

export const AuthorImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const AuthorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const AccountName = styled.span`
  font-weight: 400;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const LikeCommentCount = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 18px;
`

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${({ theme }) => theme.palette.mediumGray};
  background-color: ${({ theme }) => theme.palette.white};
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
`

export const CommentLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.mediumGray};
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.palette.mediumGray};
  font-weight: 400;
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
>>>>>>> cabab1bc3d4e015037dfba4d0d4654a1165bf918
