import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import * as S from './style';

// 이메일 유효성 체크
const EMAIL_REGEX =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const PWD_REGEX = /^[a-zA-Z0-9]{6,}$/;

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [validRegEmail, setValidRegEmail] = useState(false);
  const [validDupEmail, setValidDupEmail] = useState(false);
  const [errEmailMsg, setErrEmailMsg] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [errPasswordlMsg, setErrPasswordMsg] = useState('');
  const inputRef = useRef();

  // 버튼 활성화 조건 처리
  const canNext = validRegEmail && validPassword && validDupEmail;
  console.log(validDupEmail);

  // 이메일 중복검사
  const handleDupEmail = async () => {
    if (validRegEmail === true) {
      try {
        const { data } = await axiosPrivate.post(
          `/user/emailvalid/`,
          JSON.stringify({
            user: {
              email,
            },
          }),
        );
        if (data.message === '사용 가능한 이메일 입니다.') {
          setValidDupEmail(true);
          setErrEmailMsg(data.message);
        } else {
          setValidDupEmail(false);
          setErrEmailMsg(data.message);
        }
      } catch (error) {
        console.error('err');
      }
    } else {
      setValidDupEmail(false);
      return;
    }
  };

  // 이메일 정규식 체크
  useEffect(() => {
    setValidDupEmail(false);
    const result = EMAIL_REGEX.test(email);
    if (email.length && result) {
      setErrEmailMsg('');
      setValidRegEmail(true);
    } else if (email === '') {
      setErrEmailMsg('');
      setValidRegEmail(false);
    } else {
      setErrEmailMsg('이메일 형식을 맞춰주세요.');
      setValidRegEmail(false);
    }
  }, [email]);

  // 비밀번호 정규식 체크
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    if (password.length && !result) {
      setErrPasswordMsg('비밀번호는 6자 이상이어야 합니다.');
      setValidPassword(false);
    } else {
      setErrPasswordMsg('');
      setValidPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  // 페이지 이동
  const handleSubmit = (e) => {
    e.preventDefault();
    if (canNext) {
      navigate('/signup/profile', {
        state: {
          email,
          password,
        },
      });
    }
  };

  return (
    <>
      <S.SignupWrapper>
        <S.Title>이메일로 회원가입</S.Title>
        <S.SignupForm onSubmit={handleSubmit}>
          <S.InputWrapper length='16px'>
            <label htmlFor='email'>이메일</label>
            <input
              length='16px'
              id='email'
              type='text'
              placeholder='이메일 주소를 입력해 주세요.'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleDupEmail}
              ref={inputRef}
            />
            {errEmailMsg && (
              <p style={{ color: validDupEmail ? '#495573' : '#EB7F5F' }}>
                {errEmailMsg}
              </p>
            )}
          </S.InputWrapper>

          <S.InputWrapper length='30px'>
            <label htmlFor='pwd'>비밀번호</label>
            <input
              id='pwd'
              type='password'
              placeholder='비밀번호를 설정해 주세요.'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errPasswordlMsg && <p>{errPasswordlMsg}</p>}
          </S.InputWrapper>

          <S.NextButton
            disabled={!canNext}
            onClick={handleDupEmail}
            style={{ background: canNext ? '#495573' : '#abb9d6' }}
          >
            다음
          </S.NextButton>
        </S.SignupForm>
      </S.SignupWrapper>
    </>
  );
};

export default Signup;
