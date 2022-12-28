import Router from './routes/Router';
import SplashImg from './components/splash/SplashImg/index';
import { useState, useEffect } from 'react';

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return <>{splash ? <SplashImg /> : <Router />}</>;
}

export default App;
