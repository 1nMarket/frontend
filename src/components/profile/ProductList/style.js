import styled from 'styled-components';
import people from '../../../assets/icons/icon-people.svg';

export const ProductListWrapper = styled.article`
  width: 100%;
  margin: 6px 0;
  border-top: 0.5px solid ${({ theme }) => theme.palette.border};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.border};
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 16px;
  margin: 0 auto;
  max-width: 390px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: Pretendard-B;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 16px;
  padding-right: 16px;
  overflow: auto hidden;

  &::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 12px;
  }
  &::-webkit-scrollbar-thumb {
    height: 79px;
    border: solid 3px transparent;
    border-radius: 10px;
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.palette.border};
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ProductItem = styled.li`
  width: 140px;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;

  p {
    font-size: 14px;
    line-height: 18px;
    margin-top: 4px;
    margin-bottom: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  strong {
    font-size: 12px;
    font-family: Pretendard-B;
    color: ${({ theme }) => theme.palette.alarm};
  }
`;

export const ProductItemTxt = styled.span`
  color: ${({ theme }) => theme.palette.mediumGray};
`;

export const ProductListImg = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 90%;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const ProductMember = styled.div`
  width: 56px;
  height: 18px;
  position: absolute;
  top: 8px;
  right: 6px;
  border-radius: 10px;
  opacity: 85%;
  line-height: 6px;
  padding-top: 3.5px;
  text-align: right;
  background-color: ${({ theme }) => theme.palette.black};
`;

export const ProductMemberTxt = styled.span`
  font-size: 11px;
  font-family: Pretendard-M;
  padding-right: 7px;
  line-height: 11.6px;
  color: ${({ theme }) => theme.palette.white};

  &::before {
    content: '';
    display: inline-block;
    background-image: url(${people});
    background-size: 10px 10px;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    vertical-align: middle;
    margin: -2px 2px 0 0;
  }
`;
