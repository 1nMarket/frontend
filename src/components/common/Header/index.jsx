import React from 'react';
import * as S from './style';

const Header = ({ leftContent, rightContent }) => {
  return (
    <S.HeaderWrapper>
      {leftContent}
      {rightContent}
    </S.HeaderWrapper>
  );
};

export default Header;
