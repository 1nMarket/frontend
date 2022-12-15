import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

const EMAIL_REGEX =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const PWD_REGEX = /^[0-9]{6,12}$/;

const Signup = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [errEmailMsg, setErrEmailMsg] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [errPasswordlMsg, setErrPasswordMsg] = useState('');
  const inputRef = useRef();

  // 버튼 활성화 조건 처리
  const canNext = validEmail && validPassword;

  // input focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 다음 버튼 활성화
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);

    // email.length가 0인 경우
    // reesult가 true인 경우
    // email.lengthrk 0이면서 result인 경우
    if (!email.length || result)
      setErrEmailMsg(''); // email.length가 0이거나  경우
    else setErrEmailMsg('*올바른 이메일 형식이 아닙니다'); // email.length가 0 아니면서 result가 false인 경우
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    setValidPassword(result);

    if (password.length && !result)
      setErrPasswordMsg('*비밀번호는 6자 이상이여야 합니다.');
    else setErrPasswordMsg('');
  }, [password]);

  console.log(errEmailMsg);

  return (
    <form>
      <label htmlFor='email'>이메일</label>
      <br />
      <input
        id='email'
        type='text'
        placeholder='이메일 주소를 입력해 주세요.'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={inputRef}
      />
      {errEmailMsg && <p>{errEmailMsg}</p>}
      <br />
      <label htmlFor='pwd'>비밀번호</label>
      <br />
      <input
        id='pwd'
        type='password'
        placeholder='비밀번호를 설정해 주세요.'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errPasswordlMsg && <p>{errPasswordlMsg}</p>}
      <br />
      <button disabled={!canNext}>다음</button> <br />
      <br />
      <span>입력된 값: {email}</span>
    </form>
  );
};

export default Signup;
