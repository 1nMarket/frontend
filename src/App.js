import { useState, useEffect } from 'react';
import Router from './routes/Router';
import { SplashImg } from 'components';

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);
  return <>{splash ? <SplashImg /> : <Router />}</>;
}

export default App;
