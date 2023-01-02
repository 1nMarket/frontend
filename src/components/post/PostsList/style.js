import styled from 'styled-components';

export const PostsContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  margin: 0 auto;
  padding: 20px 16px 16px;
`;
