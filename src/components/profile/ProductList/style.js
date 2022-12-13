import styled from 'styled-components';

export const ProductListWrapper = styled.article`
  width: inherit;
  height: 208px;
  margin-top: 6px;
  padding: 20px 0 20px 16px;
  background-color: #dbdbdbd;
  border-top: 0.5px solid ${({ theme }) => theme.palette.border};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.border};
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 16px;
  overflow: auto hidden;
`;

export const ProductItem = styled.li`
  width: 140px;

  img {
    width: 140px;
    height: 90px;
  }

  p {
    font-size: 14px;
  }

  strong {
    font-size: 12px;
    font-weight: bold;
    color: #eb7f5f;
  }
`;
