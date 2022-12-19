import styled from 'styled-components';
// import imgUpload from '../../assets/icons/icon-upload.svg';

export const Conatiner = styled.main`
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
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`;