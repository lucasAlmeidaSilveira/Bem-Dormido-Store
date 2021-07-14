import Link from 'next/link';
import { BoxCart, Container } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import { SignInButton } from '../SignInButton';
import { useSession } from 'next-auth/client';
import { HeaderProps } from '../../types/types';

export function Header({ onOpenLoginModal }: HeaderProps) {
  const [session] = useSession();

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
          {session && (
            <BoxCart>
              <FaShoppingCart />
            </BoxCart>
          )}
        </ul>
      </nav>
    </Container>
  );
}
