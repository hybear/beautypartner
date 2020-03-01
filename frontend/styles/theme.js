import baseStyled, { css, ThemedStyledInterface, ThemeProvider } from 'styled-components';

const sizes = {
  desktop: 1140,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = {
  desktop: (...args) => undefined,
  tablet: (...args) => undefined,
  phone: (...args) => undefined,
};

Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

const color = {
  primary: '#F57B51',
  secondary: '#938451',
  white: '#F8F8F8',
  rawWhite: '#FFF',
  lightGrey: '#E6E6E6',
  grey: '#76777A',
  black: '#12100E',
  blue: '#1976D2',
  orange: '#E27945',
  error: '#D63447',
  success: '#46A47C',
};

const misc = {
  bs: '0 2px 15px 0px rgba(0,0,0, 0.09)',
};

export const theme = {
  color,
  media,
  misc,
};

export const ThemeProviderWrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
export const styled = baseStyled;
export default theme;
