import Link from 'next/link';
import { BoxCart, Container } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import { SignInButton } from '../SignInButton';
import { useSession } from 'next-auth/client';
import { HeaderProps } from '../../types/types';
import { useRouter } from 'next/router';

export function Header({ onOpenLoginModal }: HeaderProps) {
  const [session] = useSession();
  const { asPath } = useRouter();

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
              <a className={asPath === '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/products'>
              <a className={asPath === '/products' ? 'active' : ''}>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href='/gallery'>
              <a className={asPath === '/gallery' ? 'active' : ''}>Galeria</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className={asPath === '/contact' ? 'active' : ''}>Contato</a>
            </Link>
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
