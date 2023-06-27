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
    width: 1600px;
    height: 906px;
    overflow: hidden;
`

export default ModelComponent
