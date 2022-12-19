import styled from 'styled-components';

export const AlertContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 150;
`;

export const AlertModal = styled.div`
  width: 252px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 10px;
`

export const ModalComment = styled.p`
  text-align: center;
  padding: 22px;
  border-bottom: .5px solid ${({ theme }) => theme.palette.border};
`;

export const ModalList = styled.ul`
  display: flex;

  > li {
    width: 50%;
    padding: 14px 0;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;

    &:first-child {
      border-right: .5px solid ${({ theme }) => theme.palette.border};
    }

    &:last-child {
      color: ${({ theme }) => theme.palette.alarm}
    }
  }
`;