import styled from 'styled-components';

export const FooterConatiner = styled.footer`
  border-top: 0.5px solid ${({ theme }) => theme.palette.border};
  position: fixed;
  bottom: 0;
  width: inherit;
  background-color: ${({ theme }) => theme.palette.white};
  z-index: 110;
`;

export const InputSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 18px;
  width: 100%;
  height: 60px;
  padding: 0 16px;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.lightGray};
  }
`;

export const CommentBtn = styled.button`
  font-family: Pretendard-M;
  font-size: 14px;
  border: none;
  white-space: nowrap;
  background: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.lightGray};

  &.active {
    color: ${({ theme }) => theme.palette.alarm};
  }
`;
