import styled from 'styled-components';

export const ButtonSignIn = styled.button`
  background: var(--blue);
  height: 3.5rem;
  padding: 0.8rem 1.7rem;
  position: relative;

  border: 0;
  border-radius: 5.7rem;
  color: var(--yellow);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
  z-index: 999;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
    ul {
      transform: translateX(-50%) rotateX(0);
      opacity: 1;
    }
  }

  span {
    position: relative;
    bottom: 4px;
  }

  img {
    height: 2rem;
    margin-right: 0.9rem;
    &#user-image {
      border-radius: 100%;
    }
  }
`;

export const SubMenu = styled.ul`
  padding: 2rem 1rem 1rem;
  margin-top: -25px;
  width: 100%;
  border-radius: 0 0 2rem 2rem;
  background: var(--blue);
  list-style: none;
  position: absolute;
  z-index: -999;
  left: 50%;
  transform: translateX(-50%) rotateX(-90deg);
  transform-origin: top center;
  top: calc(100% + 10px);
  opacity: 0.25;

  transition: transform 0.2s ease-in;

  li {
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0;
    transition: filter 0.2s ease;
  }

  li:hover {
    background: var(--blue);
    filter: brightness(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--white);
    margin-right: 0.8rem;
  }
`;
