import React from 'react';
import { axiosPrivate } from '../../../apis/axios';
import AlertModalLayout from '../AlertModalLayout';

const ProductRemoveModal = ({ productId, setOpenModal, setOpenAlert, setProductList }) => {
  const handleCancel = () => {
    setOpenAlert(false);
    setOpenModal(false);
  };

  const handleRemove = async () => {
    await axiosPrivate.delete(`product/${productId}`);
    setOpenAlert(false);
    setOpenModal(false);
    setProductList((prev) => prev.filter(({ id }) => id !== productId));
  }

  return (
    <AlertModalLayout comment='상품을 삭제할까요?'>
      <li onClick={handleCancel}>취소</li>
      <li onClick={handleRemove}>삭제</li>
    </AlertModalLayout>
  );
};

export default ProductRemoveModal;
