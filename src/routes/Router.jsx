import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import RequireAuth from '../components/common/RequireAuth';
import Follows from '../pages/Follows';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PostUpload from '../pages/PostUpload';
import ProdcutUpload from '../pages/ProductUpload';
import Profile from '../pages/Profile';
import Public from '../pages/Public';
import Search from '../pages/Search';
import Signup from '../pages/Signup';
import SignupProfile from '../pages/SignupProfile';
import Missing from '../pages/Missing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />

          <Route path='signup'>
            <Route index element={<Signup />} />
            <Route path='profile' element={<SignupProfile />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route element={<Navbar />}>
              <Route path='home' element={<Home />} />

              <Route path='profile/:accountname'>
                <Route index element={<Profile />} />
                <Route path='followings' element={<Follows />} />
                <Route path='followers' element={<Follows />} />
              </Route>

              <Route path='search' element={<Search />} />

            </Route>
            
            <Route path='post'>
                <Route path='upload' element={<PostUpload />} />
            </Route>

            <Route path='product/upload' element={<ProdcutUpload/>}/>
          </Route>

          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
