import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../apis/axios';
import * as S from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const canLogin = !!email.length && !!password.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canLogin) return;

    const { data } = await axios.post(
      '/user/login',
      JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    );
    if (data?.status === 422) {
      return setErrMsg(data?.message);
    }
    localStorage.setItem('token', JSON.stringify(data?.user?.token));
    localStorage.setItem(
      'accountname',
      JSON.stringify(data?.user?.accountname),
    );
    setEmail('');
    setPassword('');
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('token'))) {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor='email'>이메일</S.Label>
          <S.LoginInput
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>

        <S.Label htmlFor='pwd'>비밀번호</S.Label>
        <S.LoginInput
          id='pwd'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {errMsg && <S.AlarmParagraph>{errMsg}</S.AlarmParagraph>}

        <S.LoginButton
          style={{ backgroundColor: canLogin ? '#495573' : '#abb9d6' }}
        >
          로그인
        </S.LoginButton>
      </S.LoginForm>

      <S.StyledLink to='/signup'>이메일로 회원가입</S.StyledLink>
    </S.Container>
  );
};

export default Login;
