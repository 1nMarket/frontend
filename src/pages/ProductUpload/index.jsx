import React from 'react'
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './style';


const ProductUpload = () => {

  return (
    <>
      <SaveHeader/>
      
      <S.Content>

        <S.ImgWrapper>
            <S.ImgLabel>이미지 등록</S.ImgLabel>
            <S.ProductImg>
                {/* 이미지 */}
                <S.ImgBtn/>
            </S.ProductImg>
        </S.ImgWrapper>

        <S.InputWrapper>      
            <S.ProductInputInfo>상품명</S.ProductInputInfo>
            <S.ProductInput placeholder='2~15자 이내여야 합니다.'/>
            <S.ProductInputInfo>가격</S.ProductInputInfo>
            <S.ProductInput placeholder='숫자만 입력 가능합니다.'/>
            <S.ProductInputInfo>판매 링크</S.ProductInputInfo>
            <S.ProductInput placeholder='URL을 입력해 주세요.'/>
        </S.InputWrapper>

      </S.Content>
    </>
  )
}

export default ProductUpload;
