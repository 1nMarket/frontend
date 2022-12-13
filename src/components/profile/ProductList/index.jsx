import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import * as S from './style';

const ProductList = () => {
  // params 객체로 받아옴
  const { accountname } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const {
        data: { product },
      } = await axiosPrivate.get(`/product/${accountname}`);
      console.log(product);
      setProductList(product);
    };
    getProductList();
  }, []);

  return (
    <>
      <S.ProductListWrapper>
        <S.Title>판매 중인 상품</S.Title>
        <S.ProductList>
          {productList.length &&
            productList.map((product, i) => (
              <S.ProductItem key={product.id}>
                <img src='' alt='' />
                <p>제목</p>
                <strong>가격원</strong>
              </S.ProductItem>
            ))}
        </S.ProductList>
      </S.ProductListWrapper>
    </>
  );
};

export default ProductList;
