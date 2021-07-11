import Modal from 'react-modal';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Crie sua conta</h2>
    </Modal>
  );
}
