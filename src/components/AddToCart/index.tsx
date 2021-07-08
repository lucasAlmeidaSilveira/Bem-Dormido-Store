import { ButtonCart } from './styles';

export function AddToCart() {
  return (
    <ButtonCart>
      <div>Comprar agora</div>
      <div>
        <img src='/images/cart.svg' alt='Adicionar ao carrinho' />
      </div>
    </ButtonCart>
  );
}
