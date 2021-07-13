import Link from 'next/link';
import { BoxCart, Container } from './styles';
import { SignInButton } from '../SignInButton';

interface HeaderProps {
  onOpenLoginModal: () => void;
}

export function Header({ onOpenLoginModal }: HeaderProps) {
  return (
    <Container>
      <div>
        <Link href='/'>
          <img id='logo' src='/images/logo.svg' alt='Logo Bem Dormido Store' />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a className='active'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/products'>Produtos</Link>
          </li>
          <li>
            <Link href='/gallery'>Galeria</Link>
          </li>
          <li>
            <Link href='/contact'>Contato</Link>
          </li>
          <li>
            <SignInButton onOpenLoginModal={onOpenLoginModal} />
          </li>
          <BoxCart>
            <img src='/images/cart.svg' alt='Carrinho de compras' />
          </BoxCart>
        </ul>
      </nav>
    </Container>
  );
}
