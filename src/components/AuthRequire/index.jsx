import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthRequire = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthRequire;
