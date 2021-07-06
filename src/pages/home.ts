import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 125.42px);
  background: url('/assets/nuvem.svg') left no-repeat;
  background-size: contain;
`

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  
  img{
    height: 95%;

    transition: transform .2s ease;
    &:hover{
      transform: scale(1.01);
    }
  }
`