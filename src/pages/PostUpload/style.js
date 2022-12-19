import styled from 'styled-components';
// import imgUpload from '../../assets/icons/icon-upload.svg';

export const Conatiner = styled.main`
  min-height: calc(100vh - 48px);
  padding: 68px 16px 20px;
  display: flex;
  column-gap: 12px;
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
`;

export const PostForm = styled.form`
  width: 100%;
`

export const PostComment = styled.textarea`
  width: 100%;
  min-height: 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
`;

export const ImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`;

export const ImgList = styled.ul`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  overflow: hidden;
`;

export const ImgItem = styled.li`
  position: relative;
  overflow: hidden;
  border: 0.5px solid ${({ theme }) => theme.palette.border};
  border-radius: 10px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const RemoveButton = styled.button`
  position: absolute;
  padding: 6px;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;

  &::before,
  &::after {
    content: '';
    width: 11px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-50%);
    border-bottom: 1px solid ${({ theme }) => theme.palette.white};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
