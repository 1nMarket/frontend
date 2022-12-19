import React from 'react';
import AlertModalLayout from '../AlertModalLayout';

const ProductRemoveModal = () => {
  return (
    <AlertModalLayout comment='상품을 삭제할까요?'>
      <li>취소</li>
      <li>삭제</li>
    </AlertModalLayout>
  );
};

export default ProductRemoveModal;
