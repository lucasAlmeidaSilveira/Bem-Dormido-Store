import { ButtonSignIn } from './styles';
import { signOut, useSession } from 'next-auth/client';

interface SignInButtonProps {
  onOpenLoginModal: () => void;
}

export function SignInButton({ onOpenLoginModal }: SignInButtonProps) {
  const [session] = useSession();

  return session ? (
    <ButtonSignIn type='button' onClick={() => signOut()}>
      <img id='user-image' src={session.user.image} alt='Conta' />
      Sua conta
    </ButtonSignIn>
  ) : (
    <>
      <ButtonSignIn type='button' onClick={onOpenLoginModal}>
        <img src='/images/nuvem-login.svg' alt='Login' />
        Login
      </ButtonSignIn>
    </>
  );
}
