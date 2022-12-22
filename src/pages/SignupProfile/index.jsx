import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosImgUpload, axiosPrivate } from '../../apis/axios';

const USERNAME_REGEX = /^[a-zA-Z0-9가-힣]{2,10}$/;
// eslint-disable-next-line
const ACCOUNTNAME_REGEX = /^[a-z0-9\.\_]{2,15}$/;

const SignupProfile = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(
    'https://mandarin.api.weniv.co.kr/1671431659709.png',
  );
  const [userName, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState(false);
  const [errUserNameMsg, setErrUserNameMsg] = useState('');
  const [accountName, setAccountName] = useState('');
  const [validAccountName, setValidAccountName] = useState(false);
  const [validDupAccountName, setValidDupAccountName] = useState(false);
  const [errAccountNameMsg, setErrAccountNameMsg] = useState('');
  const [intro, setIntro] = useState('');

  // 버튼 활성화 조건 처리
  const canSignup = validUserName && validAccountName & validDupAccountName;

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
  };

  // 계정 ID 중복확인
  const handleDupAccountName = async () => {
    if (validAccountName === true) {
      try {
        const { data } = await axiosPrivate.post(
          `/user/accountnamevalid`,
          JSON.stringify({
            user: {
              accountname: accountName,
            },
          }),
        );
        if (data.message === '사용 가능한 계정ID 입니다.') {
          setValidDupAccountName(true);
          setErrAccountNameMsg(data.message);
        } else if (data.message === '잘못된 접근입니다.') {
          setValidDupAccountName(false);
          setErrAccountNameMsg('');
        } else {
          setValidDupAccountName(false);
          setErrAccountNameMsg(data.message);
        }
      } catch (error) {
        console.error('err');
      }
    } else {
      setValidDupAccountName(false);
      return;
    }
  };

  // 계정 ID 유효성 체크
  useEffect(() => {
    setValidDupAccountName(false);
    const result = ACCOUNTNAME_REGEX.test(accountName);

    if (accountName.length && !result) {
      setErrAccountNameMsg(
        '영문 소문자,숫자와 특수문자 마침표(.),밑줄(_)만 사용 가능합니다.',
      );
      setValidAccountName(false);
    } else {
      setErrAccountNameMsg('');
      setValidAccountName(true);
    }
  }, [accountName]);

  // 사용자 이름 유효성 체크
  useEffect(() => {
    const result = USERNAME_REGEX.test(userName);
    setValidUserName(result);

    if (userName.length && !result) {
      setErrUserNameMsg('2~10자의 한글,영어,숫자만 사용 가능합니다.');
      setValidAccountName(false);
    } else {
      setErrUserNameMsg('');
      setValidAccountName(true);
    }
  }, [userName]);

  // 회원가입처리
  const handleUserSignup = async (e) => {
    e.preventDefault();
    console.log(state.email, state.password);
    console.log(profileImg, userName, accountName, intro);
    if (!state?.email || !state?.password) navigate('/signup');
    if (canSignup) {
      await axiosPrivate.post(
        '/user',
        JSON.stringify({
          user: {
            username: userName,
            email: state.email,
            password: state.password,
            accountname: accountName,
            intro,
            image: profileImg,
          },
        }),
      );
    }
    navigate('/login');
  };

  return (
    <>
      <section>
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <form onSubmit={handleUserSignup}>
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
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              onBlur={handleDupAccountName}
            />
            {errAccountNameMsg && <p>{errAccountNameMsg}</p>}
          </div>
          <div>
            <label htmlFor='introduce'>소개</label> <br />
            <input
              id='introduce'
              placeholder='간단한 자기소개를 적어주세요!'
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </div>
          <button disabled={!canSignup}>1n마켓 시작하기</button>
        </form>
      </section>
    </>
  );
};

export default SignupProfile;
