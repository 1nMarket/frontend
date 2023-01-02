import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}

    @font-face {
      font-family: 'Pretendard-R';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-M';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-B';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 600;
    font-style: bold;
  }

  :root {
    font-family: Pretendard-R;
    width: 100%;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    padding: 0;
    font-family: Pretendard-M;
    cursor: pointer;
  }

  textarea {
    font-family: Pretendard-R;
  }

  .ir {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }


`;

export default GlobalStyled;
