import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';
import SaveIcon from '../../../../assets/icons/Ms--Disabled-button.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '검색하기',
})``;

export const RightIcon = styled.img.attrs({
  src: SaveIcon,
  alt: '1N마켓 피드',
})``;

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