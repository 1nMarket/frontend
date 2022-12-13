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
      {productList.length === 0 ? null : (
        <S.ProductListWrapper>
          <S.Title>판매 중인 상품</S.Title>
          <S.ProductList>
            {productList.map((product, i) => (
              <S.ProductItem key={product.id}>
                <img src={product.itemImage} alt='' />
                <p>{product.itemName}</p>
                <strong>{product.price.toLocaleString()}원</strong>
              </S.ProductItem>
            ))}
          </S.ProductList>
        </S.ProductListWrapper>
      )}
    </>
  );
};

export default ProductList;
