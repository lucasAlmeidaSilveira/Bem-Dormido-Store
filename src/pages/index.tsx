import Head from 'next/head';
import Link from 'next/link'

import {
  Container,
  Content,
  Title,
  Slogan,
  ContentBanner,
  Button,
} from '../styles/home';
import { GlobalStyle } from '../styles/global';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem Dormido Store</title>
      </Head>

      <Container>
        <Content>
          <img src='/images/Foto.svg' alt='Pijama Kigurumi' />

          <ContentBanner>
            <Slogan>
              <span>É diferente</span>
              <span>É confortável</span>
              <span>É o famoso...</span>
            </Slogan>
            <Title>
              <h2>Pijama</h2>
              <h1>Kigurumi</h1>
            </Title>
            <p>
              Pijamas para tornar sua noite mais <br />
              confortável, quentinha, e bem dormida.
            </p>
            <Link href='/products'><Button>Confira</Button></Link>
          </ContentBanner>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}
