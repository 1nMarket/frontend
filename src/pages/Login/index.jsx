import { useState } from 'react';
import axios from '../../apis/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/user/login',
        JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      );
      console.log(res);
    } catch (err) {
      console.log(err.status);
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
