import { Link } from 'react-router-dom';
import styled from 'styled-components';
import feedIcon from '../../assets/icons/icon-feed.svg';

export const Container = styled.main`
  padding: 48px 0 60px;
`;

export const NoneFeedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px 0;
  height: calc(100vh - 108px);

  @media screen and (max-width: 390px) {
    height: calc(100svh - 108px);
  }
`;

export const NoneFeedAlert = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.mediumGray};
  
  &::before {
    content: '';
    display: block;
    width: 71px;
    height: 86px;
    background: url(${feedIcon}) no-repeat center / 71px 86px;;
  }
`;

export const SearchLink = styled(Link)`
  padding: 13px 34px;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 40px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white};
`