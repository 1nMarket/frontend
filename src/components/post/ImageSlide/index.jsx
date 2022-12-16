import React, { useRef, useState } from 'react';
import * as S from './style';

const ImageSlide = ({ images }) => {
  const [selectBtn, setSelectBtn] = useState(0);
  const slideRef = useRef();
  const handleSlide = (i) => {
    const { current: slideEl } = slideRef;
    const { width } = slideEl.getBoundingClientRect();
    slideEl.style.transform = `translateX(${(-width / images.length) * i}px)`;
    setSelectBtn(i);
  };

  return (
    <S.SlideContainer imgLength={images.length}>
      <S.Slide ref={slideRef} imgLength={images.length}>
        {images.map((image, i) => (
          <S.SlideItem key={i}>
            <S.PostImage src={image} alt='' />
          </S.SlideItem>
        ))}
      </S.Slide>
      <S.ButtonWrapper>
        {images.length > 1 &&
          images.map((_, i) => (
            <S.SlideButton
              style={{ backgroundColor: selectBtn === i && '#495573' }}
              key={i}
              onClick={() => handleSlide(i)}
            />
          ))}
      </S.ButtonWrapper>
    </S.SlideContainer>
  );
};

export default ImageSlide;
