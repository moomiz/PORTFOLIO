import React from 'react'
import { styled } from "styled-components"
import Image from "next/image"
import first from "@/public/firstcloud.png"
import second from "@/public/secondcloud.png"
import Third from "@/public/Thirdcloud.png"
import ProfileComponent from '@/components/about/ProfileComponent'
import ThreeObject from '../model/ThreeObject'

function LogoComponent() {
  return (
    <Wrapper>
      <TitleContainer>
        <Title className="Endeavoring">신입 개발자</Title>
        <Title><Point>김민지</Point>포트폴리오</Title>
      </TitleContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  height: 100vh;
  /* justify-content: center;
  align-items: center; */
`
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 5%;
  justify-content: start;
  align-items: center;

  
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
  font-family:RixInooAriDuriR;
  color:#FFE78F;
  text-shadow: 2px 2px 2px gray;
  font-weight: normal;
  font-style: normal;
`
const Point = styled.span`
  color: ${({ theme }) => theme.color.point};
  font-family: RixInooAriDuriR;
  font-size:128px;
  text-shadow: 2px 2px 2px gray;
  /* margin-left: 2rem; */
  margin-right: 3rem;
`


export default LogoComponent
