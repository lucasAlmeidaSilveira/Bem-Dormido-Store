import Head from 'next/head';
import { AddToCart } from '../../components/AddToCart';
import {
  BoxSlider,
  Container,
  Description,
  ImageProduct,
  InfoProduct,
} from './style';

export default function Products() {
  return (
    <>
      <Head>
        <title>Produtos | Bem Dormido Store</title>
      </Head>

      <Container>
        <h1>Pijama Kigurumi</h1>

        <BoxSlider>
          <ImageProduct className='d-none'>
            <img
              src='/images/photos/panda-infantil.png'
              alt='Pijama Kigurumi Panda Infantil'
            />
          </ImageProduct>

          <InfoProduct>
            <div className='title'>
              <h2>Panda</h2>
              <h4>Pijama Kigurumi</h4>
            </div>
            <div className='amount'>
              <div>
                <small>R$</small>
                <h3>89</h3>
                <small>,90</small>
              </div>
              <p>
                ou <span>12x de R$9,87 no cartão</span>
              </p>
            </div>
            <div className='models'>
              <ul>
                <li>Infantil I</li>
                <li className='active'>Infantil II</li>
                <li>Adulto</li>
              </ul>
            </div>
            <div className='sizes'>
              <p>Tamanho:</p>
              <ul>
                <li>8</li>
                <li className='active'>10</li>
                <li>12</li>
                <a href='#description'>
                  <img
                    src='/images/info.svg'
                    alt='Informações sobre os tamanhos'
                  />
                </a>
              </ul>
            </div>
            <AddToCart />
            <div className='addtional-info'>
              <div className='order'>
                <p>
                  Feito sob encomenda
                  <img src='/images/encomenda.svg' alt='Feito sob encomenda' />
                </p>
                <p>
                  7 dias úteis para <span>produção</span>
                </p>
              </div>
              <div className='payment'>
                <p>
                  Meios de pagamento
                  <span>
                    <img src='/images/card.svg' alt='Meios de pagamento' />
                  </span>
                </p>
              </div>
            </div>
          </InfoProduct>
        </BoxSlider>

        <Description id="description">
          <div>
            <img src="/images/pijama-medidas.svg" alt="Medidas do Pijama" />
          </div>

          <div>
            <img src="/images/tabela-medidas.svg" alt="Tabela de Medidas" />
          </div>
        </Description>
      </Container>
      <br /><br /><br /><br /><br />
    </>
  );
}
