import { ButtonSignIn } from './styles';
import { signIn, signOut, useSession } from 'next-auth/client';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <ButtonSignIn type='button' onClick={()=> signOut()}>
      <img id="user-image" src={session.user.image} alt='Conta' />
      Sua conta
    </ButtonSignIn>
  ) : (
    <ButtonSignIn type='button' onClick={() => signIn('google')}>
      <img src='/images/nuvem-login.svg' alt='Login' />
      Login
    </ButtonSignIn>
  );
}
