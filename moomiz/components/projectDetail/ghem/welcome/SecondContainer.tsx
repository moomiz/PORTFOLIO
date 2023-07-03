import React, { useState, useRef } from "react";
import styled  from "styled-components";
import useIntersectionObsever from "@/util/hooks/useIntersectionObserver";
// import gameRecommend from "@/assets/image/gameRecommend.png";


function SecondContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersectionObsever(ref);

  return (
    <Layout>
      <TextSection ref={ref} className={isInViewport ? "animation" : ""} >
      <h1>게임 추천 서비스</h1>
        <h2># 게임평가 기반 추천 </h2>
        <h3> 내가 했던 게임과 비슷한 게임을 알고 싶은 경우</h3>
        <h3> 내 게임 성향에 맞는 게임을 찾고 싶은 경우</h3>
      </TextSection>
      <Section ref={ref} className={isInViewport ? "animation" : ""}>
        <div>
          <div>
            <GameRecommend>
              {/* <div className="good">🎀</div> */}
              <div className="square"></div>
              {/* <div className="good">👍</div> */}
            </GameRecommend>
            <div>
            </div>
          </div>
        </div>
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
  flex-direction: row;
  justify-content: center;
  ${({theme})=>theme.devices.mobile}{
    flex-wrap: wrap;
  }
`;

const Section = styled.div`
  z-index: 100;
  height: 100vh;
  width: 50%;
  text-align: center;
  margin: 10%;


  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${({theme})=>theme.devices.mobile}{
    width: 100%;
    height: 50%;
  }

  &.animation {
    animation-name: opacity;
    animation-duration: 5000ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const TextSection = styled.div`
  z-index: 100;
  height: 70vh;
  width: 50%;
  text-align: center;
  background-color:#352c425f ;
  margin-left: 15%;
  border-radius: 1rem;


  ${({theme})=>theme.devices.mobile} {
    margin: 0;
    margin-left: 10%;
    margin-right: 10%;
    height: 50%;
    width:100%
  }
  
  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #ffffffef;
    text-shadow: 0 0 1px #ffffff4b, 0 0 2px #ffffff3a, 0 0 4px #ffffff45,
      0 0 7px #f6b4ffb9, 0 0 10px #f1c1ff53, 0 0 15px #ffd8f840,
      0 0 18px #eb68ffba, 0 0 23px #ffa9cb3a;
    
      ${({theme})=>theme.devices.mobile} {
        font-size: 1.7rem;
      }
  
    }

  h2 {
    font-size: 1.3rem;
    margin: 2rem;
    text-align: start;

    color: #23152a;
    text-shadow: 0 0 1px #ffffff4b, 0 0 2px #ffffff3a, 0 0 4px #ffffff45,
    0 0 2px #f6b4ffb9, 0 0 5px #f1c1ff53, 0 0 8px #ffd8f840, 0 0 5px #eb68ffba,
    0 0 5px #ffa9cb3a;

    ${({theme})=>theme.devices.mobile} {
        font-size: 1.2rem;
      }
  }
  h3 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: start;
    font-weight: 400;
    color: #ffffffef;
    text-shadow: 0 0 1px #ffffff4b, 0 0 2px #ffffff3a, 0 0 4px #ffffff45,
      0 0 7px #f6b4ffb9, 0 0 10px #f1c1ff53, 0 0 15px #ffd8f840,
      0 0 18px #eb68ffba, 0 0 23px #ffa9cb3a;
    ${({theme})=>theme.devices.mobile} {
      font-size: 0.7rem;
    }
  }
  &.animation {
    animation-name: opacity;
    animation-duration: 1000ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

const GameRecommend = styled.div`
  height: 70vh;
  margin-top: 20%;
  /* border: 1px solid ; */
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({theme})=>theme.devices.mobile} {
    margin-top: 0;
    padding:0;
  }

  .good {
    position: relative;
    animation: bounce 0.8s infinite linear;
    font-size: 2rem;
    @keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }
  }
  .square {
    height: 23rem;
    width: 18rem;
    background-image: url(https://cdn.cloudflare.steamstatic.com/steam/apps/${774171}/hero_capsule.jpg);
    /* object-fit: cover; */
    border-radius: 1rem;

    /* ${({theme})=>theme.devices.mobile} {
    margin: 5rem;
    height: 15rem;
    width:20rem; */
  }
  .text {
    width: 100%;
  }

`


export default SecondContainer;