import { Container } from './styles';
import { SignInButton } from '../SignInButton'
import Link from 'next/link'

export function Header() {
  return (
    <Container>
      <div>
        <a href="/">
          <img id="logo" src='/images/logo.svg' alt='Logo Bem Dormido Store' />
        </a>
      </div>
      <nav>
        <div>
          <Link href='/'><a className="active">Home</a></Link>
          <Link href='/products'>Produtos</Link>
          <Link href='/gallery'>Galeria</Link>
          <Link href='/contact'>Contato</Link>
          <SignInButton />
        </div>
      </nav>
    </Container>
  );
}
