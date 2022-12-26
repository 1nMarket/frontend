import React from 'react'
import { useState } from 'react';
import { axiosPrivate } from '../../apis/axios';
import SaveHeader from '../../components/common/Header/SaveHeader';
import ProductForm from '../../components/post/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';

const ProductModify = () => {
    const [imgFiles, setImgFiles] = useState('');
    const [productName, setProductName] = useState('');
    const [productLink, setProductLink] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [canSave, setCansave] = useState(false);

    const navigate = useNavigate();
    const { postId } = useParams();
    const accountName = JSON.parse(localStorage.getItem('accountname'));

    const handleProductUpload = async (e) => {
        console.log(productName, productPrice, productLink, imgFiles);
        e.preventDefault();
        if (!canSave) return;
        await axiosPrivate.put(
          `/product/${postId}`,
          {
            product: {
              itemName: productName,
              price: Number(productPrice.replaceAll(",", "")),
              link: productLink,
              itemImage: imgFiles
            },
          },
        )
        navigate(`/profile/${accountName}`);
      };

  return (
    <>
        <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload}/> 
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
