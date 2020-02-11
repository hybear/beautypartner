import App from 'next/app';
import React, { Component } from 'react';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';
import theme from '../styles/theme';
import Meta from './Meta';

class Page extends App {
  render() {
    // const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Meta theme={theme} />
          {this.props.children}
        </ThemeProvider>
      </>
    );
  }
}

export default Page;
