import styled from 'styled-components';
import fullLogo from '../../../assets/icons/fullLogo.svg';
import { keyframes } from 'styled-components';

const logoAnimation = keyframes`
    0%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const SplashWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${logoAnimation};
  animation-duration: 3s;
`;

export const Logo = styled.div`
  width: 166px;
  height: 166px;
  margin-bottom: 228px;
  background: url(${fullLogo}) no-repeat;
`;
