export interface ProductsProps {
  product: {
    priceId: string;
    info: {
      name: string;
      images: string[];
    };
    amount: number;
  };
  onOpenLoginModal: () => void
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
    id: string
  }
  data: {
    stripe_customer_id: string
  }
}
