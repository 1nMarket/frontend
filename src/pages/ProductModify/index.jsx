import React from 'react'
import { useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import ProductForm from '../../components/post/ProductForm';

const ProductModify = () => {
    const [imgFiles, setImgFiles] = useState('');
    const [productName, setProductName] = useState('');
    const [productLink, setProductLink] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [canSave, setCansave] = useState(false);
    console.log(canSave);

  return (
    <>
        <SaveHeader canSave={canSave}/> 
        <ProductForm
          imgFiles={imgFiles}
          setImgFiles={setImgFiles}
          productName={productName}
          setProductName={setProductName}
          productLink={productLink}
          setProductLink={setProductLink}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          setCansave={setCansave}
        />
    </>
  )
}

export default ProductModify;
