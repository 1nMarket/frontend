import * as S from './style';

const ImageSlide = ({ images }) => {
  return (
    <S.SlideContainer imgLength={images.length}>
      <S.Slide imgLength={images.length}>
        {images.map((image, i) => (
          <S.SlideItem key={i}>
            <S.PostImage src={image} alt='' />
          </S.SlideItem>
        ))}
      </S.Slide>
      <S.ButtonWrapper>
        {images.length > 1 && images.map((_, i) => <S.SlideButton key={i} />)}
      </S.ButtonWrapper>
    </S.SlideContainer>
  );
};

export default ImageSlide;
