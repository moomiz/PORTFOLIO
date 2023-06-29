import React from 'react';
import ThreeObject from './ThreeObject';
import { styled } from 'styled-components';

function ModelComponent() {
  return (
    <Wrapper>
      <ThreeObject />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 5%;
`

export default ModelComponent
