import React from 'react'
import styled from 'styled-components'

function Pin(props) {

  let {urls} = props;
  return (
    <Wrapper>
        <Container>
            <img src = {urls?.regular} alt="pin" />
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
      border-radius: 20px;
      cursor: zoom-in;
      transition: transform 0.3s ease;

      :hover {
        transform: scale(1.2) translate(10%, 10%);
      } 

    }
`

export default Pin;
