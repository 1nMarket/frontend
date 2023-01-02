import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Pretendard-M;
  font-size: 24px;
  line-height: 30px;
  padding: 30px 0 40px;
`;

export const LoginForm = styled.form`
  width: calc(100% - 70px);
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.palette.mediumGray};
  font-family: Pretendard-M;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
`;

export const LoginInput = styled.input`
  width: 100%;
  border: none;
  padding: 5px 0;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 13px;
  border-radius: 44px;
  border: none;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.disabled};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.mediumGray};
  font-family: Pretendard-M;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  margin-top: 20px;
`;

export const AlarmParagraph = styled.p`
  margin-top: 6px;
  font-family: Pretendard-M;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.alarm};
`;
