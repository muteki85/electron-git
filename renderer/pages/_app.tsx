import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Container from "../components/Layout/Container/Container";
import NavBar from "../components/Layout/NavBar/NavBar";

import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Electron Git</title>
      </Head>
        <NavBar />
        <Container>
      <Component {...pageProps} />
        </Container>
    </>
  );
}

export default MyApp;
