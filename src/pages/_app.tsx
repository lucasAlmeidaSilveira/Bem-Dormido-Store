import { AppProps } from 'next/app';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import { useState } from 'react';
import Modal from 'react-modal';
import { LoginModal } from '../components/LoginModal';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <NextAuthProvider session={pageProps.session}>
      <Header onOpenLoginModal={handleOpenLoginModal} />
      <Component onOpenLoginModal={handleOpenLoginModal} {...pageProps} />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />

      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
