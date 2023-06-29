import React from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import first from "@/public/firstcloud.png"
import second from "@/public/secondcloud.png"
import Third from "@/public/Thirdcloud.png"
import ProfileComponent from '@/components/about/ProfileComponent'
import ThreeObject from '../model/ThreeObject'
import flower from "@/public/flower.png"
import flowerBlack from "@/public/flowerBlack.png"
import Link from 'next/link'

function LogoComponent() {
  return (
    <Wrapper>
      <TitleContainer>
        <Title className="Endeavoring">김민지의 포트폴리오</Title>
      </TitleContainer>
      <Flower className='flower'>
        <Image
          src={flowerBlack}
          alt='flower1'
          className='flower1'
          width={150}
          height={150}
        />
        <Image
          src={flowerBlack}
          alt='flower2'
          className='flower2'
          width={150}
          height={150}
        />
        <Image
          src={flowerBlack}
          alt='flower3'
          className='flower3'
          width={150}
          height={150
          }
        />
        <Image
          src={flowerBlack}
          alt='flower4'
          className='flower4'
          width={150
          }
          height={150
          }
        />
      </Flower>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  height: 100vh;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;

  `
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  
`
const TextList = styled.div`
   width:300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  position: relative;
  top:-250px;
`
const Text = styled.div`
  width: 150px;
  height: 150px;

`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 2%;
  bottom: 50%;
  width: 100%;
  .right{
    margin-left: 60%;
  }
  animation: fadein 3s;
  animation-fill-mode: forwards;
  @keyframes fadein {
/* 효과를 동작시간 동안 0 ~ 1까지 */
	from {
		opacity: 0;
    
	}
	to {
		opacity: 1;
    transform: translateY(40%);
	}
}
`
const Title = styled.div`
   font-weight: 800;
  font-size: 98px;
  margin: 1rem;
  font-family:Cafe24ClassicType-Regular;
  color:#000000;
  /* text-shadow: 2px 2px 2px gray; */
  font-weight: normal;
  font-style: normal;
`
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-family: Cafe24ClassicType-Regular;
  font-size:128px;
  text-shadow: 2px 2px 2px gray;
  /* margin-left: 2rem; */
  margin-right: 3rem;
`


const Flower = styled.div`
  width:300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  animation: rotate_image 15s linear infinite;transform-origin: 50% 50%;
  
  &:hover{
    animation-play-state: paused;
  }
  .flower1:hover{
    animation: fadeout 1s;
    animation-fill-mode: forwards;
  
  }

  

  .flower2 {
    transform: scaleX(-1);
  }
  .flower2:hover{
    animation: fadeout 1s;
    animation-fill-mode: forwards;
  }
  .flower3 {
    transform: scaleY(-1);
  }

  .flower3:hover{
    animation: fadeout 1s;
    animation-fill-mode: forwards;
  }

  .flower4:hover{
    animation: fadeout 1s;
    animation-fill-mode: forwards;
  }

  @keyframes fadeout {
    0%{
      opacity: 1;
    }
    100% {
      opacity: 0;
  }
  }
  @keyframes rotate_image{
    100% {
        transform: rotate(360deg);
    }
  }
`
const Petal = styled.div`

`

export default LogoComponent
