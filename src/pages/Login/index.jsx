import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../apis/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '/user/login',
        JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      );
      console.log(data);
      localStorage.setItem('token', JSON.stringify(data?.user?.token));
      localStorage.setItem('accountname', JSON.stringify(data?.user?.accountname));
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('token'))) {
      navigate('/home');
    }
  }, []);

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
