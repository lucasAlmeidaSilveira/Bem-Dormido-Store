import styled from 'styled-components';

export const Container = styled.main`
  width: min(1260px, 90%);
  border-radius: 3rem;
  margin: 0 auto;
  padding: 5rem;
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 1.2rem 3.9rem;
    background: var(--blue);
    border-radius: 3rem;

    color: var(--white);
    text-transform: uppercase;
    font-size: clamp(1.5rem, 2.4rem, 1.6rem);
  }

`;

export const BoxSlider = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 63.6rem;

  div.d-none {
    margin-right: 8.4rem;
  }

`;

export const ImageProduct = styled.div`
  width: 51.2rem;
  height: 55.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 8rem;

  background: var(--blue);
  border-radius: 100%;
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div + div {
    margin-top: 1.9rem;
  }

  .title {
    text-transform: uppercase;
    h2 {
      color: var(--blue);
      font-size: 6rem;
      line-height: 5rem;
      margin-left: -0.35rem;
    }

    h4 {
      font-family: 'Open sans', sans-serif;
      color: var(--gray-90);
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .amount {
    /* display: inline-block; */
    display: flex;
    flex-direction: column;

    div {
      width: 12.4rem;
      height: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;

      background: var(--yellow);
      color: var(--red);

      small {
        align-self: flex-start;
        margin-top: 0.5rem;

        font-weight: 600;
        font-size: 1.5rem;
      }

      small + h3 + small {
        align-self: flex-end;
      }

      h3 {
        font-size: 5rem;
      }
    }

    p {
      font-family: 'Open sans', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;

      color: var(--black);

      span {
        color: var(--green);
      }
    }
  }

  .models {
    font-family: 'Open sans', sans-serif;

    ul {
      display: flex;
      list-style: none;

      li {
        padding: 0.523rem 1.1rem;

        background: var(--gray-50);
        color: var(--black);

        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;

        cursor: pointer;

        transition: background, 0.2s ease, filter 0.2s ease, color 0.2s ease;

        & + li {
          margin-left: 1rem;
        }

        &.active {
          background: var(--blue);
          color: var(--white);
        }

        &:hover {
          background: var(--blue);
          color: var(--white);
          filter: brightness(1.2);
        }
      }
    }
  }

  .sizes {
    p {
      font-family: 'Open sans', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;

      color: var(--black);
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      margin-top: 0.7rem;

      li {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        font-size: 1.6rem;
        font-weight: 600;

        background: var(--gray-50);
        color: var(--black);

        cursor: pointer;

        transition: background, 0.2s ease, filter 0.2s ease, color 0.2s ease;

        & + li {
          margin-left: 1.5rem;
        }

        &.active {
          background: var(--blue);
          color: var(--white);
          transform: scale(1.1);
        }

        &:hover {
          background: var(--blue);
          color: var(--white);
          filter: brightness(1.2);

          transform: scale(1.1);
        }
      }

      a {
        margin-left: 1.5rem;
      }
    }
  }

  .addtional-info{
    width: 100%;
    padding: 1.2rem;

    background: var(--gray-20);

    .order{
      margin-bottom: 3.145rem;

      p{
        font-family: 'Open sans', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;
        color: var(--black);
        

        img{
          margin-left: .925rem;
        }

        & + p{
          font-weight: 400;

          color: var(--gray-90)
        }

        span{
          font-weight: 600;
        }
      }
    }

    .payment{
      p{
        font-family: 'Open sans', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;
        color: var(--black);
      }
    }
  }
`;

export const Description = styled.article`
  padding: 4.6rem 6.9rem;
  background: var(--gray-20);
  margin-top: 6rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 1rem;

    div + div{
      margin-top: 4rem;
    }

    img{
      width: 100%;
    }
  }
`
