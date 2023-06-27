import React from 'react';
import { styled } from 'styled-components';

function RoomComponent() {
  return (
    <Wrapper>
        안녕하세요 
    </Wrapper>
  )
}

const Wrapper = styled.div`
    scroll-snap-align: start;
    background-color: #D1CDFF;
    height: 100vh;
    width: 100%;
`
export default RoomComponent
