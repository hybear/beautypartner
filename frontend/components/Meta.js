import React from 'react';
import Head from 'next/head';

const Meta = ({ title, desc }) => {
  return (
    <Head>
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content="Beauty Partner" />
      <meta property="og:url" content="www.beautypartner.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="@beautypartner" />
      <meta name="twitter:creator" content="@beautypartner" />

      <title>Beauty Partner - {title}</title>
    </Head>
  );
};

export default Meta;
