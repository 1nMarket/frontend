import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // }
  console.log(email);
  console.log(password);

  return (
    <form>
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
    </form>
  );
};

export default Login;
