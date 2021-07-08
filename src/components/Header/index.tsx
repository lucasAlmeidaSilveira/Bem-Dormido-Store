import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <a href="/">
          <img src='/images/logo.svg' alt='Logo Bem Dormido Store' />
        </a>
      </div>
      <nav>
        <div>
          <a className='active' href='/'>Home</a>
          <a href='/products'>Produtos</a>
          <a href='/gallery'>Galeria</a>
          <a href='/contact'>Contato</a>
        </div>
      </nav>
    </Container>
  );
}
