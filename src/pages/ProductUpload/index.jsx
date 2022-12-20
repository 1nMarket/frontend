import React from 'react'
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './style';


const ProductUpload = () => {
  
  return (
    <>
      <SaveHeader/>
      
      <S.Form>

        <S.ImgWrapper>
            <S.ImgLabel>이미지 등록</S.ImgLabel>
            <S.ProductImgDiv>
                {/* 이미지 */}
                <S.BtnImg/>
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
