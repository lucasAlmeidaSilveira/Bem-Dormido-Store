import { Container } from './styles';
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoImg} alt='Logo Bem Dormido Store' />
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
