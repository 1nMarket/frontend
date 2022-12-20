import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosImgUpload, axiosPrivate } from '../../apis/axios';

const USERNAME_REGEX = /^[a-zA-Z0-9가-힣]{2,10}$/;
// eslint-disable-next-line
const ACCOUNTNAME_REGEX = /^(?=[a-z])[a-z0-9\.\_]{5,15}$/;

const SignupProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState('');
  const [userName, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState('false');
  const [errUserNameMsg, setErrUserNameMsg] = useState('');
  const [accountname, setAccountname] = useState('');
  const [validAccountName, setValidAccountName] = useState('false');
  const [errAccountNameMsg, setErrAccountNameMsg] = useState('');

  // 가입 버튼 활성화 처리
  const canSignup = validUserName && validAccountName;

  if (profileImg === '') {
    setProfileImg('https://mandarin.api.weniv.co.kr/1671431659709.png');
  }

  const handleImgUpload = async (e) => {
    let form = new FormData();

    if (e.target.files[0] === undefined) {
      return;
    } else {
      form.append('image', e.target.files[0]);
    }

    // 서버에 파일 전달
    const {
      data: { filename },
    } = await axiosImgUpload.post('/image/uploadfile', form);

    setProfileImg(`https://mandarin.api.weniv.co.kr/${filename}`);
    console.log(profileImg);
  };

  // 계정 ID 중복확인
  const accountNameCheck = async () => {
    if (!validAccountName) return;

    const res = await axiosPrivate.post(
      `/user/accountnamevalid`,
      JSON.stringify({
        user: {
          accountname,
        },
      }),
    );
    console.log(res);
  };

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  // 사용자 이름 유효성 체크
  useEffect(() => {
    const result = USERNAME_REGEX.test(userName);
    setValidUserName(result);

    if (userName.length && !result) {
      setErrUserNameMsg('2~10자의 한글,영어,숫자만 사용 가능합니다.');
    } else {
      setErrUserNameMsg('');
    }
  }, [userName]);

  // 계정 ID 유효성 체크
  useEffect(() => {
    const result = ACCOUNTNAME_REGEX.test(accountname);
    setValidAccountName(result);

    if (accountname.length && !result) {
      setErrAccountNameMsg(
        '영문 소문자,숫자와 특수문자 마침표(.),밑줄(_)만 사용 가능합니다.',
      );
    } else {
      setErrAccountNameMsg('');
    }
  }, [accountname]);

  return (
    <>
      <section>
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <form autoComplete='off'>
          <div>
            <label htmlFor='profileImg' style={{ cursor: 'pointer' }}>
              <img
                src={profileImg}
                alt='프로필 사진'
                width='110px'
                height='110px'
              />
            </label>
            <input
              id='profileImg'
              type='file'
              accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
              onChange={handleImgUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div>
            <label htmlFor='userName'>사용자 이름</label> <br />
            <input
              id='userName'
              placeholder='2~10자의 한글,영어,숫자만 사용 가능'
              maxLength='10'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errUserNameMsg && <p>{errUserNameMsg}</p>}
          </div>
          <div>
            <label htmlFor='accountName'>계정 ID</label> <br />
            <input
              id='accountName'
              placeholder='영문 소문자,숫자와 특수문자 마침표(.),밑줄(_)만 사용 가능'
              maxLength='15'
              value={accountname}
              onChange={(e) => setAccountname(e.target.value)}
              onBlur={accountNameCheck}
            />
            {errAccountNameMsg && <p>{errAccountNameMsg}</p>}
          </div>
          <div>
            <label htmlFor='introduce'>소개</label> <br />
            <input id='introduce' placeholder='간단한 자기소개를 적어주세요!' />
          </div>
          <button disabled={!canSignup}>1n마켓 시작하기</button>
        </form>
      </section>
    </>
  );
};

export default SignupProfile;
