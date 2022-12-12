import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';

const ProductList = () => {
  // params 객체로 받아옴
  const { accountname } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const {
        data: { product },
      } = await axiosPrivate.get(`/product/${accountname}`);
      setProductList(product);
    };
    getProductList();
  }, []);

  return (
    <>
      {productList.length &&
        productList.map((product, i) => (
          <p key={product.id}>{product.itemName}</p>
        ))}
    </>
  );
};

export default ProductList;
