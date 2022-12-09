import React from 'react';
import Header from '../../components/common/Header';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { auth } = useAuth();
  console.log(auth);
  
  return (
    <>
      <Header />
      <main>
      </main>
    </>
  );
};

export default Home;
