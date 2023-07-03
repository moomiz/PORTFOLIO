import React from 'react'
import { styled } from "styled-components";
import Image from "next/image";
import Profile1 from '@/public/profile1.jpg'
import MyPhoto from '@/public/MyPhoto.jpg'
function ProfileComponent() {
    return (
        <MainContainer>
            <ProfileContainer>
                <Image
                    src={MyPhoto}
                    alt='profile'
                    width={300}
                    height={300}
                />
            </ProfileContainer>
            <IntroduceContainer>
                <IntroduceUl>
                    <li>"사용자의 경험을 중시하기 위해"</li>
                    <li>"함께 일하고 싶은 동료가 되기 위해"</li>
                    <li>"더 나은 개발자가 되기 위해"</li>
                </IntroduceUl>
            </IntroduceContainer>

        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard-Regular;
    font-weight: 600;
`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-around; 
  align-items : center;
  height: 100%;
`

export default ProfileComponent
