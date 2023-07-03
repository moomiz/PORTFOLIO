import React from 'react'
import styled from 'styled-components';
import useIntersectionObsever from '@/util/hooks/useIntersectionObserver';
import Gheming from '@/public/Gheming.png';
import Image from 'next/image';

function LastContainer() {
    const CategoryHandler = () => {

    };

    return (
        <Layout>
            <Circle></Circle>
            <Section>
                <GhemImg>
                    <Image onClick={CategoryHandler} src={Gheming} alt='Gheming' width={500} height={500}/>
                </GhemImg>
            </Section>
        </Layout>
    );
}
const Layout = styled.div`
    /* scroll-snap-align: start; */
    width: 100%;
    height: 100vh;
    font-size: 1em;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const Section = styled.div`
    /* height:100%; */
    text-align: center;
  `;

//   const button = css`
//   z-index: 100;
//   display: inline-block; 
// 	padding: 20px 40px;
// 	color: white;
// 	position: relative;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	vertical-align: middle;
// 	text-decoration: none;
// 	font-size: 4vw;
// 	transition: all .5s;
// 	background-color: #bf34db;
//   border-radius: 1rem;

// 	&::before {
// 		bottom: -15px;
// 		height: 15px;
// 		width: 100%;
// 		left: 8px;
// 		transform: skewX(45deg);
// 		background-color: darken(#d334db, 20%);
// 	}

// 	&::after {
// 		right: -15px;
// 		height: 100%;
// 		width: 1px;
// 		bottom: -8px;
// 		transform: skewY(45deg);
// 		background-color: darken(#d334db, 30%);
// 	}

// 	&:active {
// 		margin-left: 10px;
// 		margin-top: 10px;
// 		&::before {
// 			bottom: -5px;
// 			height: 5px;
// 			left: 3px;
// 		}

//     &::after {
// 			right: -5px;
// 			width: 5px;
// 			bottom: -3px;
// 		}	
// 	}
//   `
const Circle = styled.div`
  position: relative;
  top: 20%;
  width: 23rem;
  height: 23rem;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 0%, #d400ff),
    linear-gradient(transparent);
  animation: rotate 1.5s linear infinite;

  ::before,
  ::after {
    content: " ";
    position: absolute;
    inset: 8px;
    background: linear-gradient(transparent);
    border-radius: inherit;
  }
  ::before {
    background: linear-gradient(45deg, transparent, transparent 0%, #0095ff);
    filter: blur(32px);
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
      filter: hue-rotate(90deg);
    }
  }
`;

const GhemImg = styled.div`
  z-index: 100;
  position: relative;
  bottom: 50%;
  :hover{
    /* transform: scale(1.2) translateY(-20px); */
    animation: bouncing 0.5s .3s infinite;
  }
  @keyframes bouncing {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
}

  
`


export default LastContainer