import React from 'react'
import styled from 'styled-components';
import Pin from './Pin';

const Mainboard = (props) => {

  let {pins} = props;

  return (
      <Wrapper>
        <Container>
          {pins.map((pin, i) =>{
            let { urls } = pin;
            return <Pin key={i} urls={urls} />
          })}
        </Container>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    margin-top: 20px;
    display: flex;
    justify-content: center;

`
const Container = styled.div`
    column-count: 5;
    column-gap: 5px;
    width: 80%;
    background-color: white;
    display: flex-wrap;
    max-width: 1260px;
    margin: 0 auto;
    
    @media (min-width: 1200px) {
      column-count: 5;
      justify-content: space-between;
    }
  
    @media (min-width: 900px) and (max-width: 1199px) {
      column-count: 3;
      justify-content: space-between;
    }
  
    @media (max-width: 899px) {
      column-count: 2;
      justify-content: center;
    }
    
`

export default Mainboard;

