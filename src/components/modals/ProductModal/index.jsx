import React from 'react';
import { useState } from 'react';
import ProductAlertModal from '../../alertModals/ProductAlertModal';
import ModalLayout from '../ModalLayout';
import * as S from './style';

const ProductModal = ({ link, productId, product, setProductList, setOpenModal }) => {
  const [openAlert, setOpenAlert] = useState(false);
  
  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>
          <S.StyledLink to={`/product/${productId}/edit`} state={{ ...product }}>수정</S.StyledLink>
        </li>
        <li>
          <S.ProductLink href={`${link}`}>웹사이트에서 상품 보기</S.ProductLink>
        </li>
      </ModalLayout>
      {openAlert && (
        <ProductAlertModal
          productId={productId}
          setProductList={setProductList}
          setOpenAlert={setOpenAlert}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default ProductModal;
