import Head from 'next/head'
import { Container, Content } from './home';
import { GlobalStyle } from '../styles/global';

export default function Home() {
  return (
    <>
    <Head>
      <title>Bem Dormido Store</title>
    </Head>

    <Container>
      <Content>
          <img src="/assets/Foto.svg" alt="Pijama Kigurumi" />

        <div>
          <div id="slogan">
            <p>É diferente</p>
            <p>É confortável</p>
            <p>É o famoso</p>
          </div>
          <div id="title-banner">
            <h2>Pijama</h2>
            <h1>Kigurumi</h1>
          </div>
          <p>
            Pijamas para tornar sua noite mais confortável, quentinha, e bem
            dormida.
          </p>
          <a href="/produtos">Confira</a>
        </div>
      </Content>
    </Container>
    <GlobalStyle />
    </>
  )
}
