import { GetStaticProps } from 'next';
import Head from 'next/head';
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { ProductsProps } from '../types/types';
import { AddToCart } from '../components/AddToCart';
import { stripe } from '../services/stripe';
import {
  BoxSlider,
  Container,
  Description,
  ImageProduct,
  InfoProduct,
} from '../styles/products';
import { useState } from 'react';
import Stripe from 'stripe';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Products({
  products,
  onOpenLoginModal,
}: ProductsProps) {
  // const amount = {
  //   real: product.price.toString().substr(0, 2),
  //   cents: product.price.toString().substr(2, 2),
  // };

  return (
    <>
      <Head>
        <title>Produtos | Bem Dormido Store</title>
      </Head>

      <Container>
        <h1>Pijama Kigurumi</h1>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          className='mySwiper'
        >
          {products.map(product => (
            <SwiperSlide>
              <BoxSlider>
                <ImageProduct className='d-none'>
                  <img src={product.images[0]} alt={product.description} />
                </ImageProduct>

                <InfoProduct>
                  <div className='title'>
                    <h2>{product.name}</h2>
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
                  <AddToCart
                    onOpenLoginModal={onOpenLoginModal}
                    priceId='lala'
                  />
                  <div className='addtional-info'>
                    <div className='order'>
                      <p>
                        Feito sob encomenda
                        <img
                          src='/images/encomenda.svg'
                          alt='Feito sob encomenda'
                        />
                      </p>
                      <p>
                        7 dias úteis para <span>produção</span>
                      </p>
                    </div>
                    <div className='payment'>
                      <p>
                        Meios de pagamento
                        <span>
                          <img
                            src='/images/card.svg'
                            alt='Meios de pagamento'
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </InfoProduct>
              </BoxSlider>
            </SwiperSlide>
          ))}
        </Swiper>

        <Description id='description'>
          <div>
            <img
              draggable='false'
              src='/images/pijama-medidas.svg'
              alt='Medidas do Pijama'
            />
          </div>

          <div>
            <img
              draggable='false'
              src='/images/tabela-medidas.svg'
              alt='Tabela de Medidas'
            />
          </div>
        </Description>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list();

  const products = {
    data,
  };
  return {
    props: {
      products: products.data,
    },

    revalidate: 60 * 60 * 24, // 24 hours
  };
};
