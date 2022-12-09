import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
// import Profile from '../pages/profile';
// import AuthRequire from '../components/AuthRequire';
import Public from '../pages/Public';
import Login from '../pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />

          <Route element={<Navbar />}>
            <Route path='home' element={<Home />} />
          </Route>

          {/* <Route element={<AuthRequire />}>
            <Route path="profile" element={<Profile />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
