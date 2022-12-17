import styled from 'styled-components';

export const SignupWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
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
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  line-height: 15px;
`;

export const SignupInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
`;

export const NextButton = styled.button`
  margin-top: 30px;
`;
