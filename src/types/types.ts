export interface ProductsProps {
  product: {
    priceId: string;
    info: {
      name: string;
      images: string[];
    };
    amount: number;
  };
  onOpenLoginModal: () => void;
}

export interface AddToCartProps {
  priceId: string;
  onOpenLoginModal: () => void;
}

export interface HeaderProps {
  onOpenLoginModal: () => void;
}

export interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface SignInButtonProps {
  onOpenLoginModal: () => void;
}

export interface User {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
}

export interface StripeBuyProducts {
  id: string,
  object: string,
  amount_subtotal: number,
  amount_total: number,
  currency: string,
  description: string,
  price: {
    id: string,
    object: string,
    active: boolean,
    billing_scheme: string,
    created: number,
    currency: string,
    livemode: boolean,
    lookup_key: string,
    metadata: object,
    nickname: string,
    product: string,
    recurring: string,
    tiers_mode: string,
    transform_quantity: number | string,
    type: string,
    unit_amount: number,
    unit_amount_decimal: string,
  },
  quantity: number,
}
