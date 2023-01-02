import * as S from './style';

const AlertModalLayout = ({ children, comment }) => {
  return (
    <S.AlertContainer>
      <S.AlertModal>
        <S.ModalComment>{comment}</S.ModalComment>
        <S.ModalList>{children}</S.ModalList>
      </S.AlertModal>
    </S.AlertContainer>
  );
};

export default AlertModalLayout;
