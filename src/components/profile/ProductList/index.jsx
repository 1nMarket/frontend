import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import ProductModal from '../../modals/ProductModal';
import * as S from './style';

const ProductList = () => {
  // params 객체로 받아옴
  const { accountname } = useParams();
  const [productList, setProductList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
              <Fragment key={product.id}>
                <S.ProductItem onClick={() => setOpenModal(true)}>
                  <img src={product.itemImage} alt='' />
                  <p>{product.itemName}</p>
                  <strong>{product.price.toLocaleString()}원</strong>
                </S.ProductItem>
                {openModal && (
                  <ProductModal
                    productId={product.id}
                    setProductList={setProductList}
                    setOpenModal={setOpenModal}
                  />
                )}
              </Fragment>
            ))}
          </S.ProductList>
        </S.ProductListWrapper>
      )}
    </>
  );
};

export default ProductList;
