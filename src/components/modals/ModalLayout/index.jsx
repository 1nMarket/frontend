import React from 'react';
import * as S from './style';

const ModalLayout = ({ children, setOpenModal }) => {
  return (
    <S.ModalContainer>
      <S.ModalBackground onClick={() => setOpenModal(false)} />
      <S.ModalList>
        {children}
      </S.ModalList>
    </S.ModalContainer>
  )
}

export default ModalLayout;