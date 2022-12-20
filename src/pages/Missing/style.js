import styled from 'styled-components';
import icon404 from '../../assets/icons/icon-404.svg';

export const ErrorWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 404 로고 svg
export const ErrorIcon = styled.img.attrs({
  src: icon404,
  alt: '페이지를 찾을 수 없습니다',
})`
  position: absolute;
  width: 112px;
  height: 112px;
  top: 223px;
  left: 139px;
`;

// 페이지를 찾을 수 없습니다 txt
export const ErrorText = styled.span`
  position: absolute;
  top: 388px;
  left: 112px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.mediumGray};
  text-align: center;
`;

// 이전 페이지 버튼
export const PreButton = styled.button`
  position: absolute;
  top: 422px;
  left: 135px;
  width: 120px;
  height: 44px;
  border: none;
  border-radius: 44px;
  background-color: ${(props) => props.theme.palette['primary']};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.palette['white']};
`;
