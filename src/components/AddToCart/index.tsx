import { FaCartPlus } from 'react-icons/fa';
import { ButtonCart } from './styles';

export function AddToCart() {
  return (
    <ButtonCart>
      <div>Comprar agora</div>
      <div>
        <FaCartPlus />
      </div>
    </ButtonCart>
  );
}
