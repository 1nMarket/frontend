const palette = {
  primary: '#495573',
  disabled: '#abb9d6',
  border: '#dbdbdb',
  white: '#ffffff',
  lightGray: '#c4c4c4',
  mediumGray: '#767676',
  darkGray: '#616161',
  black: '#000000',
  kakao: '#f2c94c',
  facebook: '#2d9cdb',
  alarm: '#eb7f5f',
};

const common = {
  flexCenter: `
  display: flex;
  align-items: center;
  justify-content: center;
`,
  flexEnd: `
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,
  flexAround: `
  display: flex;
  align-items: center;
  justify-content: space-around;
`,
  flexSpaceBetween: `
  display: flex;
  align-items: center;
  justify-content: space-between;
`,
  flexColumnStart: `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,
};

const theme = {
  palette,
  common,
};

export default theme;
