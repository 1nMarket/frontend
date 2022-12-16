import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  return <div>index</div>;
};

export default SignupProfile;
