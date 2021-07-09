import styled from 'styled-components';

export const ButtonSignIn = styled.button`
  background: var(--blue);
  height: 3.5rem;
  padding: 0.8rem 1.7rem;
  display: flex !important;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5.7rem;
  color: var(--yellow);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  img {
    height: 2rem;
    margin-right: 0.9rem;
    &#user-image {
      border-radius: 100%;
    }
  }
`;