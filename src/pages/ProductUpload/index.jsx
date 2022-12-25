import React, { useEffect } from 'react'
import { axiosImgUpload, axiosPrivate } from '../../apis/axios';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './style';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpload = () => {

const {accountname} = useParams();

const navigate = useNavigate();

  // eslint-disable-next-line
  const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const [imgFiles, setImgFiles] = useState('');

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productLink, setProductLink] = useState('');

  // 유효성 검사를 위한 State
  const [validProductName, setValidProductName] = useState(false);
  const [errProductNameMsg, setErrProductNameMsg] = useState('');

  const [validProductLink, setValidProductLink] = useState(false);
  const [errProductLinkMsg, setErrProductLinkMsg] = useState('');

  // const [validProductPrice, setValidProductPrice] = useState(false);
  // const [errProductPriceMsg, setErrProductPriceMsg] = useState('');

  const canSave = !!imgFiles && validProductName && !!productPrice && validProductLink;

  const handleImgUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("image", e.target.files[0]);
    const { data } = await axiosImgUpload.post("/image/uploadfile", form);
    // console.log(data.filename);
    
    // 업로드 취소시 나타나는 엑스박스 이미지 없애기 위한 조건문
    if (!e.target.files[0]) return setImgFiles(''); 

    setImgFiles(`https://mandarin.api.weniv.co.kr/${data.filename}`)
  };

  const handleProductUpload = async (e) => {
    console.log(productName, productPrice, productLink, imgFiles);
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post(
      '/product',
      {
        product: {
          itemName: productName,
          price: Number(productPrice.replaceAll(",", "")), //1원 이상
          link: productLink,
          itemImage: imgFiles
        },
      },
    )
    navigate(`/profile/${accountname}`);
  };

  // 상품명 유효성 검사(두 글자 이상 정규식 구하기)
  useEffect(() => {
    const result = !!(productName.length >= 2);
    setValidProductName(result);

    if (productName.length && !result) setErrProductNameMsg('상품명은 최소 두 글자 이상 입력해주세요.');
    else setErrProductNameMsg('');

  }, [productName]);

  // 가격에 컴마 찍기
  const priceComma = (productPrice) => {
    const comma = (productPrice) => {
      productPrice = String(productPrice);
      return productPrice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (productPrice) => {
      productPrice = String(productPrice);
      return productPrice.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(productPrice));
  };

  // 링크 유효성 검사 
  useEffect(()=> {
    const result = URL_REGEX.test(productLink);
    setValidProductLink(result);

    if (productLink.length && !result) setErrProductLinkMsg('잘못된 URL 형식입니다.');
    else setErrProductLinkMsg('');

  }, [productLink]);

  return (
    <>
      <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload}/>
      
      <S.Form>

        <S.ImgWrapper>
            <S.ImgUploadText>이미지등록</S.ImgUploadText>
            <S.ProductImgDiv>
              
              <label htmlFor="img">
                  {imgFiles ? <S.ProductImg src={imgFiles} /> : null}
                  <S.BtnImg/>
                  <input 
                    type="file"
                    id="img"
                    accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                    className="ir"
                    onChange={handleImgUpload}
                    />
              </label>

            </S.ProductImgDiv>
        </S.ImgWrapper>

        <S.InputWrapper>      
            <S.ProductInputLabel htmlFor="itemName">상품명</S.ProductInputLabel>
            <S.ProductInput
              id="itemName"
              required
              placeholder='2~15자 이내여야 합니다.'
              type="text"
              minLength="2"
              maxLength="15"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {errProductNameMsg && <p>{errProductNameMsg}</p>}

            <S.ProductInputLabel htmlFor="price">가격</S.ProductInputLabel>
            <S.ProductInput
              id="price"
              required
              placeholder='숫자만 입력 가능합니다.'
              type="text"
              value={productPrice}
              onChange={(e) => {setProductPrice(priceComma(e.target.value))}}
            />

            <S.ProductInputLabel htmlFor="link">판매 링크</S.ProductInputLabel>
            <S.ProductInput
              id="link"
              required
              placeholder='URL을 입력해 주세요.'
              type="text"
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
            />
            {errProductLinkMsg && <p>{errProductLinkMsg}</p>}
        </S.InputWrapper>

      </S.Form>
    </>
  )
}


export default ProductUpload;