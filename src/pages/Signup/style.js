import styled from 'styled-components';

export const SignupWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin: 30px 0 40px 0;
`;

export const SignupForm = styled.form`
  width: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.length};

  input {
    width: 100%;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    padding: 0 0 8px 0;
    line-height: 14px;
    outline: none;
  }

  label {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.mediumGray};
    margin-bottom: 10px;
    line-height: 15px;
  }

  input::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.lightGray};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.alarm};
    margin-top: 6px;
  }
`;

export const NextButton = styled.button`
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 44px;
  border: none;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.disabled};
`;
