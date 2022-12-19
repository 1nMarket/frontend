import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';

export const BackIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '뒤로가기',
})`
  cursor: pointer;
`;


export const UploadButton = styled.button`
  padding: 7px 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.primary};
  border: none;
  border-radius: 32px;

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabled};
  }
`;