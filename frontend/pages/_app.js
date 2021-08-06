import React from "react";
import Head from 'next/head';
import theme from '../config/theme'
import Container from '../components/Container';
import MenuIconsList from '../components/MenuIconsList';
import FilterMenu from '../components/FilterMenu';
import GlobalStyle from '../styles/globals';

function MyApp({ Component, pageProps }) {
    const { title, favicon } = theme;
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href={favicon} />
            </Head>
            <GlobalStyle />
            <Container>
                <Container.External>
                    <Container.Columns.Icons>
                        <MenuIconsList/>
                    </Container.Columns.Icons>
                    <Container.Internal>
                        <Container.Columns.Options>
                            <FilterMenu/>
                        </Container.Columns.Options>
                        <Container.Columns.Content>
                            <Component {...pageProps} />
                        </Container.Columns.Content>
                    </Container.Internal>
                </Container.External>
            </Container>
        </div>
    )
}

export default MyApp
