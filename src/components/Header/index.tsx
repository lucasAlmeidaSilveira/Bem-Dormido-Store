import Link from 'next/link';
import { Container } from './styles';
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
        <div>
          <Link href='/'>
            <a className='active'>Home</a>
          </Link>
          <Link href='/products'>Produtos</Link>
          <Link href='/gallery'>Galeria</Link>
          <Link href='/contact'>Contato</Link>
          <SignInButton onOpenLoginModal={onOpenLoginModal} />
        </div>
      </nav>
    </Container>
  );
}
