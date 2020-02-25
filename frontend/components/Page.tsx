import App from 'next/app';
import React, { Component } from 'react';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';
import theme from '../styles/theme';

class Page extends App<any> {
  public render() {
    // const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          {this.props.children}
          {/* <Component {...pageProps} /> */}
        </ThemeProvider>
      </>
    );
  }
}

export default Page;
