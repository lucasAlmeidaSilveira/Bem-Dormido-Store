import { LinkProps } from 'next/link';
import { ReactElement } from 'react';

export interface ProductsProps {
  product: {
    id: string;
    name: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    images: string;
    currency: string;
    livemode: boolean;
    lookup_key: null;
    metadata: object;
    nickname: string;
    recurring: null;
    tiers_mode: null;
    transform_quantity: null;
    type: string;
    price: number;
    unit_amount_decimal: string;
  };
  products: [{
    id: string;
    name: string;
    object: string;
    active: boolean;
    attributes: [];
    billing_scheme: string;
    created: number;
    description: string;
    images: string;
    currency: string;
    livemode: boolean;
    lookup_key: null;
    metadata: {};
    nickname: string;
    recurring: null;
    tiers_mode: null;
    transform_quantity: null;
    type: string;
    price: number;
    unit_amount_decimal: string;
  }];
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

export interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}
