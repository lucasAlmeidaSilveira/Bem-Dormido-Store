import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  h3{
    font-size: 3rem;
    color: var(--black);

    margin-bottom: 3rem;
  }
`

export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  border-radius: 0 0 2rem 2rem;

  background: var(--gray-50);

  h4{
    font-size: 2rem;
    color: var(--black);

    margin-bottom: 3rem;
  }
`

export const BtnGoogle = styled.button`
  background: var(--white);
  padding: 0.8rem 5rem;
  display: flex;
  align-items: center;

  border: 1px solid var(--gray-20);
  border-radius: 1rem;

  color: var(--black);
  font-family: 'Open sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  transition: background 0.2s ease;

  &:hover{
    background: var(--gray-20);
  }

  svg{
    width: 35px;
    height: 35px;
    padding-right: 1rem;
  }
`;
