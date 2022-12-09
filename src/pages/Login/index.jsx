import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../apis/axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { user },
      } = await axios.post(
        '/user/login',
        JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      );
      localStorage.setItem('accessToken', JSON.stringify(user.token));
      localStorage.setItem('accountname', JSON.stringify(user.accountname));
      setAuth(user.accessToken);
      setEmail('');
      setPassword('');
      navigate('/home');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>

      <p>
        <label htmlFor='pwd'>Password</label>
        <input
          id='pwd'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>

      <button>Login</button>
    </form>
  );
};

export default Login;
