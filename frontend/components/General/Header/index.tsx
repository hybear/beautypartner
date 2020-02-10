import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';
// import NProgress from "next-nprogress/component";
// import NextNprogress from 'nextjs-progressbar';
import Router from 'next/router';
import Link from 'next/link';

// UI
import { HeaderContainer } from './styles';

const Header = () => {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('onRouteChangeComplete', () => {
    console.log('Ué');
    NProgress.done();
  });

  Router.events.on('onRouteChangeError', () => {
    console.log('Uai');
    NProgress.done();
  });

  return (
    <HeaderContainer>
      <Link href="/signin">
        <a>SignIn</a>
      </Link>
      <Link href="/signup">
        <a>SignUp</a>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
