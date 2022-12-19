import React from 'react';
import * as S from './style';

const ModalLayout = ({ children, setOpen }) => {
  return (
    <S.ModalContainer onClick={() => setOpen(false)}>
      <S.ModalList>
        {children}
      </S.ModalList>
    </S.ModalContainer>
  )
}

export default ModalLayout;