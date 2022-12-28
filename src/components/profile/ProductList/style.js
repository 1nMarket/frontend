import styled from 'styled-components';

export const ProductListWrapper = styled.article`
  width: inherit;
  margin-top: 6px;
  padding: 20px 0 20px 16px;
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
  cursor: pointer;

  img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.palette.border};
  }

  p {
    font-size: 14px;
    line-height: 18px;
    margin-top: 4px;
    margin-bottom: 2px;
  }

  strong {
    font-size: 12px;
    font-weight: bold;
    color: #eb7f5f;
  }
`;
