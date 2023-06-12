import React from 'react';
import { styled } from "styled-components";
import Image from "next/image";
import first from "@/public/firstcloud.png";
import second from "@/public/secondcloud.png";

function skill() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={second}
          width={600}
          height={300} alt={""} />
        <Image
          src={first}
          width={600}
          height={300} alt={""}
          className="right" />
      </ImageContainer>
      <Ground />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  font-weight: 800;
  font-size: 128px;
  padding-top: 7.5%;
`
const TitleContainer = styled.div`
  position: absolute;
  padding-left: 20%;
 
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

export default skill
