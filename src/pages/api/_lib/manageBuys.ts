import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

export async function saveBuy(paymentIntentId: string, customerId: string) {
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_stripe_customer_id'), customerId)),
    ),
  );

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  const paymentIntentData = {
    id: paymentIntent.id,
    userId: userRef,
    total: paymentIntent.amount,
  };

  await fauna.query(
    q.Create(q.Collection('buys'), { data: paymentIntentData }),
  );


}
