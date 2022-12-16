import styled from 'styled-components';

export const PostArticle = styled.article`
  width: 100%;
  margin-bottom: 20px;
`;

export const AuthorInfo = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const AuthorImage = styled.img`
  width: 42px;
  height: 42px;
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
  padding-left: 50px;
`;

export const PostText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;