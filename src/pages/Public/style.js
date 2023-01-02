import styled from 'styled-components';
import marketLogo from '../../assets/icons/icon-public.svg';
import googleIcon from '../../assets/icons/icon-google.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import kakaoIcon from '../../assets/icons/icon-kakao.svg';

export const PublicContainer = styled.main`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${({ theme }) => theme.palette.primary};

  @media screen and (max-width: 390px) {
    height: 100svh;
  }
`;

export const MarketLogoIcon = styled.img.attrs({
  src: marketLogo,
  alt: '1n 마켓',
})`
  width: 101px;
  height: 123px;
  position: absolute;
  top: 183px;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoginSection = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 50px 34px 80px;
  border-radius: 20px 20px 0 0;

  > button {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.white};
    font-size: 14px;
    color: ${({ theme }) => theme.palette.mediumGray};
    padding: 13px 0;
    border-radius: 44px;
    margin-bottom: 10px;
  }
`;

export const KakaoLoginButton = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.kakao};

  &::before {
    content: '';
    position: absolute;
    left: 17px;
    top: 50%;
    display: block;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    background: url(${kakaoIcon}) no-repeat center / 18px 18px;
  }
`;

export const GoogleLoginButton = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.mediumGray};

  &::before {
    content: '';
    position: absolute;
    left: 17px;
    top: 50%;
    display: block;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    background: url(${googleIcon}) no-repeat center / 18px 18px;
  }
`;

export const FacebookLoginButton = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.facebook};

  &::before {
    content: '';
    position: absolute;
    left: 17px;
    top: 50%;
    display: block;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    background: url(${facebookIcon}) no-repeat center / 18px 18px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  > a {
    font-size: 12px;
    text-decoration: none;
    font-family: Pretendard-M;
    color: ${({ theme }) => theme.palette.mediumGray};
    padding: 0 12px;

    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.palette.lightGray};
    }
  }
`;
