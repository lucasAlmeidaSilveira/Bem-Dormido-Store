import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;

  div img#logo {
    width: 14.5rem;
    cursor: pointer;

    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.04);
    }
  }

  nav > ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 3.5rem;
    position: relative;

    a {
      color: var(--white);

      padding: 0.8rem 1.7rem;
      border-radius: 57px;

      transition: all 0.2s ease;

      &:hover,
      &.active {
        color: var(--blue);
        background: var(--yellow);
      }
    }
  }
`;

export const BoxCart = styled.button`
  background: var(--yellow);
  border-radius: 0 5rem 5rem 0;
  border: none;
  height: 3.5rem;
  width: 6rem;
  padding-right: 1.1rem;
  position: absolute;
  bottom: 0;
  right: -40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  transition: filter .2s ease;
  &:hover{
    filter: brightness(1.1)
  }
`;
