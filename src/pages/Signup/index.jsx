import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef();

  // email 유효성 검사 체크
  useEffect(() => {
    // input focus
    inputRef.current.focus();

    // email 정규식
    //   const regexEmail = '';
  }, []);

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
      <p>이미 가입된 이메일 주소입니다.</p>
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
      <p>비밀번호는 6자 이상이여야 합니다.</p>
      <br />
      <button>다음</button> <br />
      <br />
      <span>입력된 값: {password}</span>
    </form>
  );
};

export default Signup;
