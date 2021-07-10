import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from './common/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
