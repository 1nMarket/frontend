import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  // </React.StrictMode>
);
