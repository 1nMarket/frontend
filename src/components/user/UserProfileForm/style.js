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
  margin-bottom: 16px;
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
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${theme.palette.border};
`;
