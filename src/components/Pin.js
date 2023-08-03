import React from 'react'
import styled from 'styled-components'

function Pins() {
  return (
    <Wrapper>
        <Container>
            <img src = 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' 
            alt='pin' />
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;

`
const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    overflow: hidden;
    
    img {
      width: 100%;
      display: flex;
      object-fit: cover;
      border-radius: 15px;
      cursor: zoom-in;
      transition: transform 0.3s ease;

      :hover {
        transform: scale(1.2) translate(10%, 10%);
      } 

    }
`

export default Pins;
