import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Profile from '../pages/profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
