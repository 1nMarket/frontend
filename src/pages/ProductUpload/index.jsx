import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SaveHeader, ProductForm } from 'components';
import { axiosPrivate } from 'apis/axios';
import { useTitle } from 'hooks';

const ProductUpload = () => {
  useTitle('1nMarket - ProductUpload');
  const { accountname } = useParams();
  const navigate = useNavigate();

  const [imgFiles, setImgFiles] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productLink, setProductLink] = useState('');
  const [canSave, setCansave] = useState(false);

  // 전체 폼 데이터 전송
  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post('/product', {
      product: {
        itemName: productName,
        price: Number(productPrice.replaceAll(',', '')),
        link: productLink,
        itemImage: imgFiles,
      },
    });
    navigate(`/profile/${accountname}`);
  };

  return (
    <>
      <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload} />

      <ProductForm
        imgFiles={imgFiles}
        setImgFiles={setImgFiles}
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        productLink={productLink}
        setProductLink={setProductLink}
        setCansave={setCansave}
      />
    </>
  );
};

export default ProductUpload;
