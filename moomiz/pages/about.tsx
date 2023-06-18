import React from 'react';
import { styled } from "styled-components";
import Image from "next/image";
import PuppyFace from '@/public/face.png';
import PinkLogo from '@/public/pinkmark.png';
import PuppyFaceTwo from '@/public/face2.png';
import YellowFlower from '@/public/yellowflower.png';

import ProfileComponent from '@/components/about/ProfileComponent';


function about() {
  return (
    <Wrapper>
      <TopContainer>
        <Image
          src={PuppyFace}
          alt="Puppy"
          width={160}
          height={100}
        />
        <Image
          src={PinkLogo}
          alt="PinkLogo"
          width={100}
          height={100}
        />
        <Image
          src={PuppyFaceTwo}
          alt="PuppyFaceTwo"
          width={160}
          height={100}
        />
        <Image
          src={YellowFlower}
          alt="Puppy"
          width={100}
          height={100}
        />
      </TopContainer>
      <MainContainer>
        <ProfileComponent />
      </MainContainer>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  /* font-weight: 800;
  font-size: 128px; */
`
const TitleContainer = styled.div`
  position: absolute;
  padding-left: 20%;
 
`
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;

`
const MainContainer = styled.div`
    background-color: white;
    height: 60vh;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;

`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const DescriptList = styled.div`
  padding-top:2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15vh;
  align-items: start;
`
const DescriptionDiv = styled.div`
  
`

const IntroduceContainer = styled.div`
height: 40vh;
width: 50%;
`
const IntroduceUl = styled.ul`
    display: flex;
  flex-direction: column;
  justify-content: space-between;  
  height: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  .right{
    margin-left: 60%;
  }
  animation: fadeout 3s;
  animation-fill-mode: forwards;
  @keyframes fadeout {
/* 효과를 동작시간 동안 0 ~ 1까지 */
	from {
		opacity: 1;
    
	}
	to {
		opacity: 0;
    transform: translateY(-20%);
	}
}

`
const Title = styled.div`
   font-weight: 800;
  font-size: 128px;
  margin: 1rem;
`
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-size:78px;
  text-shadow: 2px 2px 2px gray;
`
const Ground = styled.div`
  width: 100%;
  height: 10vh;
`

export default about
