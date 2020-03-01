// import React from 'react';
import * as styledComponents from 'styled-components';
// import { Theme } from './theme';
import withSizes from '../lib/withSizes';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  ThemeConsumer,
} = styledComponents;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, withSizes, ThemeConsumer };

export default styled;
