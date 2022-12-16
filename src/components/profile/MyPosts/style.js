import styled from 'styled-components';

export const PostHeader = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  padding: 9px 16px;
  border-top: .5px solid ${({ theme }) => theme.palette.border};
  border-bottom: .5px solid ${({ theme }) => theme.palette.border};
`;