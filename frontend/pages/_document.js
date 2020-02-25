import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from '../styles/themed-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="stylesheet" type="text/css" href="/nprogress.css" />

          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/images/favicon.png" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#12100E" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
