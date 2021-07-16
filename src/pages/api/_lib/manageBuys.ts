import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

export async function saveBuy(sessionId: string, customerId: string) {
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_stripe_customer_id'), customerId)),
    ),
  );

  const payment = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items'],
  });

  const paymentIntentData = {
    id: sessionId,
    products: payment.line_items.data,
    userId: userRef,
    total: payment.amount_total,
  };

  await fauna.query(
    q.Create(q.Collection('buys'), { data: paymentIntentData }),
  );
}
