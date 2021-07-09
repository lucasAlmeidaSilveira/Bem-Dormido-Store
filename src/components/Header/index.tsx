import Link from 'next/link'
import Modal from 'react-modal'
import { useState } from 'react';
import { Container } from './styles';
import { SignInButton } from '../SignInButton'

Modal.setAppElement('#__next')

export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <Container>
      <div>
        <Link href="/">
          <img id="logo" src='/images/logo.svg' alt='Logo Bem Dormido Store' />
        </Link>
      </div>
      <nav>
        <div>
          <Link href='/'><a className="active">Home</a></Link>
          <Link href='/products'>Produtos</Link>
          <Link href='/gallery'>Galeria</Link>
          <Link href='/contact'>Contato</Link>
          <SignInButton onOpenLoginModal={handleOpenLoginModal} />
        </div>
      </nav>

      <Modal 
        isOpen={isLoginModalOpen} 
        onRequestClose={handleCloseLoginModal}
      >
        <h2>Crie sua conta</h2>
      </Modal>

    </Container>
  );
}
