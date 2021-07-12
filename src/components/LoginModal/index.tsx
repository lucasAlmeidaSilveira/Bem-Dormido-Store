import Modal from 'react-modal';
import { FcGoogle } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5'
import { signIn, signOut, useSession } from 'next-auth/client';
import { BtnGoogle, Content, ContentFooter } from './styles';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Content>
        <button
          type='button'
          onClick={onRequestClose}
          className='react-modal-close'
        >
          <IoClose />
        </button>

        <h3>Criar conta</h3>

        <BtnGoogle type='button' onClick={() => signIn('google')}>
          <FcGoogle />Cadastre-se com o Google
        </BtnGoogle>
      </Content>
      <ContentFooter>
        <h4>Já possui uma conta?</h4>

        <BtnGoogle type='button' onClick={() => signIn('google')}>
          <FcGoogle />Entrar com o Google
        </BtnGoogle>
      </ContentFooter>

    </Modal>
  );
}
