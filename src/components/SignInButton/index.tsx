import { ButtonSignIn, SubMenu } from './styles';
import { signOut, useSession } from 'next-auth/client';
import { IoListCircleOutline, IoLogOutOutline } from 'react-icons/io5';

interface SignInButtonProps {
  onOpenLoginModal: () => void;
}

export function SignInButton({ onOpenLoginModal }: SignInButtonProps) {
  const [session] = useSession();

  return session ? (
    <ButtonSignIn type='button'>
      <img id='user-image' src={session.user.image} alt='Conta' />
      <span>Sua conta</span>
      <SubMenu>
        <li><IoListCircleOutline />Pedidos</li>
        <li onClick={() => signOut()}><IoLogOutOutline />Sair</li>
      </SubMenu>
    </ButtonSignIn>
  ) : (
    <>
      <ButtonSignIn type='button' onClick={onOpenLoginModal}>
        <img src='/images/nuvem-login.svg' alt='Login' />
        <span>Login</span>
      </ButtonSignIn>
    </>
  );
}
