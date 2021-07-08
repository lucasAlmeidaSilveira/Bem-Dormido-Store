import Head from 'next/head';
import { BoxSlider, Container, ImageProduct, InfoProduct } from './style';

export default function Products() {
  return (
    <>
      <Head>Produtos</Head>
      <Container>
        <h1>Pijama Kigurumi</h1>

        <BoxSlider>
          <ImageProduct> {/* fundo redondo azul */}
            <img src="/images/photos/panda-infantil.png" alt="Pijama Kigurumi Panda Infantil" />
          </ImageProduct>

          <InfoProduct> {/* flex-direction column; gap: 1.9rem*/}
            <div className="title">
              <h2>Panda</h2>
              <h4>Pijama Kigurumi</h4>
            </div>

            <div className="amount">
              <div>
                <small>R$</small>
                <h3>89</h3>
                <small>,90</small>
              </div>
              <p>ou <span>12x de R$9,87 no cartão</span></p>
            </div>

            <div className="models">
              <ul>
                <li>Infantil I</li>
                <li className="active">Infantil II</li>
                <li>Adulto</li>
              </ul>
            </div>

            <div className="sizes">
              <p>Tamanho:</p>
              <ul>
                <li>8</li>
                <li className="active">10</li>
                <li>12</li>
                <a href="#"><img src="/images/info.svg" alt="Informações sobre os tamanhos" /></a>
              </ul>
            </div>

            <div> {/* Componente Carrinho */}
              <div>Adicionar ao carrinho</div>
              <div><img src="/images/cart.svg" alt="Adicionar ao carrinho" /></div>
            </div>

            <div>
              <div>
                <p>Feito sob encomenda<span><img src="/images/encomenda.svg" alt="Feito sob encomenda" /></span></p>
                <p>7 dias úteis para <span>produção</span></p>
              </div>
              <div>
                <p>Meios de pagamento <span><img src="/images/card.svg" alt="Meios de pagamento" /></span></p>
              </div>
            </div>

          </InfoProduct>
        </BoxSlider>
      </Container>




    </>
  );
}
