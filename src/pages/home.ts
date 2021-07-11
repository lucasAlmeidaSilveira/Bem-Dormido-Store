import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 126.42px);
  background: url('/images/nuvem.svg') left bottom/contain no-repeat;
`;

export const Content = styled.section`
  width: min(1260px, 90%);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    object-fit: contain;
  }
`;

export const ContentBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  
  text-align: right;

  p {
    color: var(--white);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const Slogan = styled.div`
  position: relative;
  height: 12rem;
  margin-top: -20px;

  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.6rem;
  }

  span + span {
    top: 45px;
    left: 80px;
  }

  span + span + span {
    top: 90px;
    left: 160px;
  }
`;

export const Title = styled.div`
  text-align: right;
  text-transform: uppercase;

  h2 {
    font-size: 5.9rem;
    color: var(--white);
    text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.6);
    margin-bottom: -2rem;
  }

  h1 {
    font-size: 8rem;
    color: var(--yellow);
    text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.6);
  }
`;

export const Button = styled.a`
  margin-top: 1.8rem;
  align-self: flex-end;
  display: inline-block;
  padding: 0.8rem 4rem;
  border-radius: 57px;
  background: var(--yellow);

  font-size: 2.2rem;
  color: var(--blue);
  text-transform: uppercase;
  font-weight: 700;

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: var(--white);
  }
`;
