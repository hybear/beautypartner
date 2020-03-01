import App from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';
import theme from '../styles/theme';

class Page extends App {
  render() {
    // const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </>
    );
  }
}

export default Page;
