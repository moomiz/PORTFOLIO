import React from 'react';
import Image from 'next/image';
import PuppyFace from '@/public/face.png';
import PinkLogo from '@/public/pinkmark.png';
import PuppyFaceTwo from '@/public/face2.png';
import YellowFlower from '@/public/yellowflower.png';

import { styled } from 'styled-components';

function TitleComponent() {
  return (
    <Wrapper>
      <Image
      src={PuppyFace}
      alt="Puppy"
      width={290}
      height={200}
      />
       <Image
      src={PinkLogo}
      alt="PinkLogo"
      width={200}
      height={200}
      />
       <Image
      src={PuppyFaceTwo}
      alt="PuppyFaceTwo"
      width={290}
      height={200}
      />
       <Image
      src={YellowFlower}
      alt="Puppy"
      width={200}
      height={200}
      />

    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default TitleComponent
