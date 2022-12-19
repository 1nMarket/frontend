import styled from 'styled-components';

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 120;
`;

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const ModalList = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 36px 0 16px 20px;
  border-radius: 10px 10px 0 0;
  z-index: 130;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    border: 2px solid ${({ theme }) => theme.palette.border};
    border-radius: 5px;
  }

  > li {
    padding: 14px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
`;