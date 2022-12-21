import styled from 'styled-components';
import icon404 from '../../assets/icons/icon-404.svg';

export const ErrorWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 200px 0;
  box-sizing: border-box;
  text-align: center;
  flex-direction: column;
`;

// 404 로고 svg
export const ErrorIcon = styled.img.attrs({
  src: icon404,
  alt: '페이지를 찾을 수 없습니다',
})`
  margin: 0 auto 20px;
  width: 130px;
  height: 130px;
`;

// 페이지를 찾을 수 없습니다 txt
export const ErrorText = styled.span`
  display: block;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-top: 32px;
  margin-bottom: 20px;
`;

// 이전 페이지 버튼
export const PreButton = styled.button`
  background-color: ${(props) => props.theme.palette['primary']};
  color: ${(props) => props.theme.palette['white']};
  width: 120px;
  height: 44px;
  margin: 30px auto 0;
  padding: 13px 0;
  border: none;
  border-radius: 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
