import React, { useRef,useEffect,useState } from "react";
import styled  from "styled-components";
import useIntersectionObsever from "@/util/hooks/useIntersectionObserver";
function FirstContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersectionObsever(ref)


  setInterval(() => {
    const title = document.getElementById("title");
    const titleStyle = title?.style;

    // before
    const top1 = Math.random() * 100;
    const bottom1 = Math.random() * 100;
    // after
    const top2 = Math.random() * 100;
    const bottom2 = Math.random() * 100;

    titleStyle?.setProperty("--t1", `${top1}%`);
    titleStyle?.setProperty("--b1", `${bottom1}%`);
    titleStyle?.setProperty("--t2", `${top2}%`);
    titleStyle?.setProperty("--b2", `${bottom2}%`);
    // titleStyle?.setProperty('--scale', `1`)
    // count++

    //       if (count % 15 === 0) {
    //         const bigSkew = Math.random() * 180 - 90
    //         titleStyle?.setProperty('--skew', `${bigSkew}deg`)
    //       }

    //       if (count % 30 === 0) {
    //         const bigScale = 1 + Math.random() / 2
    //         titleStyle?.setProperty('--scale', `${bigScale}`)
    //       }
  
  }, 100);

  const h1 = document.querySelector('h1')

 

  return (
    <Layout>
      <Circle>
          </Circle>
      <Section>
        <h1 id="title" data-text ="GHEM">
          GHEM
        </h1>
        <Grid ref={ref} className={isInViewport ? "animation" : ""}>
        </Grid>
        <div></div>
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  
`;
const Section = styled.div`
  height: 100%;
  h1 {
    position: relative;
    z-index: 10;
    top:-18rem;
    font-size: 10rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #ffffffef;
    text-shadow: 0 0 1px #ffffff4b, 0 0 2px #ffffff3a, 0 0 4px #ffffff45,
      0 0 7px #f6b4ffb9, 0 0 10px #f1c1ff53, 0 0 15px #ffd8f840,
      0 0 18px #eb68ffba, 0 0 23px #ffa9cb3a;
    
    ${({theme})=>theme.devices.mobile} {
      font-size: 5rem;
      top:-15rem;
    }

    }

`;

const Grid = styled.div`
  top: -400px;
  bottom: -400px;
  left: -400px;
  right: -400px;
  position: fixed;
  background-color: transparent;
  background-image: linear-gradient(#f42fd3 1px, transparent 2px),
    linear-gradient(90deg,#2a96d4 1px, transparent 2px);
  background-size: 3% 3%, 3% 3%;
  background-position: 0 0, 0 0;
  transform: perspective(300px) rotateX(80deg);
  animation: throughSpace 10s linear;
  animation-iteration-count: infinite;
  @keyframes throughSpace {
    0% {
      transform: perspective(300px) rotateX(80deg) translateY(0%);
    }
    100% {
      transform: perspective(300px) rotateX(80deg) translateY(3%);
    }
  }
  &.animation {

  }
  ${({theme})=>theme.devices.mobile} {
    top:-200px;
    bottom:-200px;
  }
`;
const Circle = styled.div`
  z-index: 1;
  position: relative;
  top: 10rem;
  width: 100%;
  height: 150%;
 `
const discountText = styled.h1`
/* color: #ffffff14;
text-shadow: 0 0 1px #ffffff4b, 0 0 2px #ffffff3a, 0 0 4px #ffffff45, 0 0 7px #f6b4ffb9,
  0 0 10px #f1c1ff53, 0 0 15px #ffd8f840, 0 0 18px #eb68ffba, 0 0 23px #ffa9cb3a; */

`;

export default FirstContainer;