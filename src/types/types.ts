export interface HomeProps {
  product: {
    priceId: string;
    info: {
      name: string;
      images: string[];
    };
    amount: number;
  };
}
