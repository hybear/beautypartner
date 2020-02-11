import Head from 'next/head';

const Meta = props => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content={props.theme.color.black} />
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    <link rel="icon" href="/favicon.png" type="image/x-icon" />

    <link rel="stylesheet" type="text/css" href="/nprogress.css" />

    <title>Beauty Partner - O Boticario</title>
  </Head>
);

export default Meta;
