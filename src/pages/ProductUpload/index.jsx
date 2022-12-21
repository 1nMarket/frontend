import React from 'react'
import { axiosImgUpload } from '../../apis/axios';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './style';
import { useState } from 'react';

const ProductUpload = () => {
  
  const [imgFiles, setImgFiles] = useState('');
  // const [prodcutImg, setProductImg] = useState('');

  const handleImgUpload = async (e) => {
    e.preventDefault();
    // if (imgFiles.length > 0)
    //   return window.alert("이미지는 한 개만 업로드가 가능합니다!");

    const form = new FormData();
    form.append("image", e.target.files[0]);
    const { data } = await axiosImgUpload.post("/image/uploadfile", form);
    console.log(data.filename);
    
    // 업로드 취소시 나타나는 엑스박스 이미지 없애기 위한 조건문
    if (!e.target.files[0]) return setImgFiles(''); 

    setImgFiles(`https://mandarin.api.weniv.co.kr/${data.filename}`)
    // console.log(e.target.files[0]);
  };

  console.log(imgFiles);
  return (
    <>
      <SaveHeader/>
      
      <S.Form>

        <S.ImgWrapper>
            <S.ImgUploadText>이미지등록</S.ImgUploadText>
            <S.ProductImgDiv>
              
              <label htmlFor="img">
                  {imgFiles ? <S.ProductImg src={imgFiles} /> : null}
                  <S.BtnImg/>
                  <input 
                    type="file"
                    id="img"
                    accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                    className="ir"
                    onChange={handleImgUpload}
                    />
              </label>
            </S.ProductImgDiv>
        </S.ImgWrapper>

        <S.InputWrapper>      
            <S.ProductInputLabel htmlFor="itemName">상품명</S.ProductInputLabel>
            <S.ProductInput
              id="itemName"
              required
              placeholder='2~15자 이내여야 합니다.'
              type="text"
              minLength="2"
              maxLength="15"
            />
            <S.ProductInputLabel htmlFor="price">가격</S.ProductInputLabel>
            <S.ProductInput
              id="price"
              required
              placeholder='숫자만 입력 가능합니다.'
              type="number"
            />
            <S.ProductInputLabel htmlFor="link">판매 링크</S.ProductInputLabel>
            <S.ProductInput
              id="link"
              required
              placeholder='URL을 입력해 주세요.'
            />
        </S.InputWrapper>

      </S.Form>
    </>
  )
}

export default ProductUpload;
