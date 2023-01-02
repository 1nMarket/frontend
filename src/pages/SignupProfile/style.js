import styled from 'styled-components';
import theme from '../../styles/theme';

export const SignupWrapper = styled.section`
  max-width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-family: Pretendard-M;
  line-height: 30px;
  margin: 30px 0 12px 0;
`;

export const Desc = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.palette.mediumGray};
`;

export const SignupButton = styled.button`
  width: calc(100% - 70px);
  height: 44px;
  font-size: 15px;
  border-radius: 44px;
  border: none;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ disabled }) =>
    disabled ? theme.palette.disabled : theme.palette.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;
