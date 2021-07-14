import { useSession } from 'next-auth/client';
import { FaCartPlus } from 'react-icons/fa';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { AddToCartProps } from '../../types/types';
import { ButtonCart } from './styles';

export function AddToCart({ priceId, onOpenLoginModal }: AddToCartProps) {
  const [session] = useSession();

  async function handleBuy() {
    if (!session) {
      onOpenLoginModal();
      return;
    }

    try {
      const response = await api.post('/buy');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <ButtonCart onClick={handleBuy}>
      <div>Comprar agora</div>
      <div>
        <FaCartPlus />
      </div>
    </ButtonCart>
  );
}
