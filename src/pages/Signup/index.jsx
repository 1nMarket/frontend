import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

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
      />
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
      <br />

      <button>다음</button>
    </form>
  );
};

export default Signup;
