import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import Container from "../components/Layout/Container/Container";
import NavBar from "../components/Layout/NavBar/NavBar";

import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
                    rel="stylesheet"/>
                <title>Electron Git</title>
            </Head>
            <NavBar/>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
}

export default MyApp;
