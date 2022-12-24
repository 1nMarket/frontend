import styled from 'styled-components';
import theme from '../../../styles/theme';
import uploadIcon from '../../../assets/icons/upload-file.svg';

export const ProfileForm = styled.form`
  width: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;

export const FileWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const FileLabel = styled.label`
  display: block;
  width: 110px;
  height: 110px;
  position: relative;
  color: ${theme.palette.mediumGray};
  cursor: pointer;
  margin: 0 auto;

  &::after {
    position: absolute;
    content: '';
    width: 36px;
    height: 36px;
    bottom: 0;
    right: 0;
    background: url(${uploadIcon}) no-repeat center / 36px 36px;
  }
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${theme.palette.border};
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.length};
`;

export const ProfileLabel = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: ${theme.palette.mediumGray};
  margin-bottom: 10px;
  line-height: 15px;
`;

export const ProfileInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid ${theme.palette.border};
  padding: 0 0 8px 0;
  line-height: 14px;
  outline: none;

  &::placeholder {
    font-weight: 400;
    color: ${theme.palette.lightGray};
  }

  &:focus {
    border-bottom: 1px solid ${theme.palette.primary};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
`;

export const ErrMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ validcheck }) =>
    validcheck ? theme.palette.primary : theme.palette.alarm};
  margin-top: 6px;
`;
