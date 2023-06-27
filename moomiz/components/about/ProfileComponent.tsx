import React from 'react'
import { styled } from "styled-components";
import Image from "next/image";

import Profile from '@/public/profile.png';
function ProfileComponent() {
    return (
        <MainContainer>
            <ProfileContainer>
                <Image
                    src={Profile}
                    alt="Profile"
                    width={240}
                    height={250}
                />
                <DescriptList>

                    <DescriptionDiv>김민지</DescriptionDiv>
                    <DescriptionDiv>1998.04.09</DescriptionDiv>
                    <DescriptionDiv>010-8964-8573</DescriptionDiv>
                </DescriptList>
            </ProfileContainer>
            <IntroduceContainer>
                Hello🖐️
                <IntroduceUl>
                    <li>"책임감"과 "열정"을 가지고 있습니다.</li>
                    <li>클린 코드를 작성하기 위해 노력합니다.</li>
                    <li>사용자 친화적인 UX/UI를 고려하여 개발하기 위해 노력합니다.</li>
                    <li>피드백을 적극적으로 수용하여 빠르게 문제를 해결하기 위해 노력합니다.</li>
                    <li>효율적인 코드를 짜기 위해 주 3회 이상 알고리즘 문제를 풀고 있습니다.</li>
                </IntroduceUl>
            </IntroduceContainer>

        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
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

export default ProfileComponent
