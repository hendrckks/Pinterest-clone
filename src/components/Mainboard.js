import React from 'react'
import styled from 'styled-components';
import Pin from './Pin';

const Mainboard = () => {
  return (
      <Wrapper>
        <Container>
          <Pin />
        </Container>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    margin-top: 15px;
    display: flex;
    justify-content: center;

`
const Container = styled.div`
    display: flex;
    width: 80%
    background-color: white;
    
`

export default Mainboard;

