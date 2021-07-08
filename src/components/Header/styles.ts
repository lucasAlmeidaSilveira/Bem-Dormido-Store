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

  div img {
    width: 14.5rem;
    cursor: pointer;

    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.04);
    }
  }

  nav > div {
    display: flex;
    gap: 3.5rem;

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
