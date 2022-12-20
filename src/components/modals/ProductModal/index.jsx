import React from 'react';
import { useState } from 'react';
import ProductRemoveModal from '../../alertModals/ProductRemoveModal';
import ModalLayout from '../ModalLayout';

const ProductModal = ({ productId, setProductList, setOpenModal }) => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>수정</li>
        <li>웹사이트에서 상품 보기</li>
      </ModalLayout>
      {openAlert && (
        <ProductRemoveModal
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
