import styled from 'styled-components';

export const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const Slide = styled.ul`
  display: flex;
  height: inherit;
  width: calc(${({ imgLength }) => imgLength * 100}%);
  transition: transform 0.4s;
`;

export const SlideItem = styled.li`
  width: 100%;
  height: 218px;
  border: 0.5px solid ${({ theme }) => theme.palette.border};
  border-radius: 10px;
  overflow: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const SlideButton = styled.button`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
  border-radius: 50%;
`;
