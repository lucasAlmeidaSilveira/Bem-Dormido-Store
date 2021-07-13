import styled from 'styled-components';

export const ButtonCart = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  div {
    padding: 1.63rem 1.59rem;
    height: 4.4rem;

    display: flex;
    align-items: center;

    background: var(--blue);
    color: var(--white);
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;

    transition: filter 0.2s ease;

    &:first-child:hover {
      filter: brightness(1.2);
    }

    & + div {
      padding: 1.41rem;

      background: var(--gray-50);
      margin-top: 0 !important;
    }

    svg{
      width: 25px;
      height: 25px;
      color: var(--blue);
    }
  }
`;
