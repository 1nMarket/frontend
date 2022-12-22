import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Public = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'));
  
  useEffect(() => {
    if (token) navigate('/home');
  }, []);

  return <div>Public</div>;
};

export default Public;
