import styled from "styled-components";
import FindImgBtn from '../../../assets/icons/img-button.svg';


export const Form = styled.form`
    padding: 78px 34px 0px;
`;

export const ImgWrapper = styled.div`
    padding-bottom: 30px;
`;

export const ImgUploadText = styled.p`
    font-size: 12px;
    color: ${({theme}) => theme.palette.mediumGray};
`;

export const ProductImgDiv = styled.div`
    width: 322px;
    height: 204px;
    margin-top: 18px;
    border-radius: 10px;
    position: relative;
    background-color: ${({ theme }) => theme.palette.border};
`;

export const BtnImg = styled.img.attrs({
    src: FindImgBtn,
    alt: "이미지 업로드"
})`
    position: absolute;
    right: 12px;
    bottom: 12px;
    cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme.palette.alarm};
        margin: -10px 0 15px 0;
      }
`;

export const ProductInputLabel = styled.label`
    color: ${({theme}) => theme.palette.mediumGray};
    font-size: 12px;
`;

export const ProductInput = styled.input`
    display: block;
    padding: 10px 0 8px 0;
    margin-bottom: 16px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};;
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.palette.border};
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.palette.primary};
    }
`;