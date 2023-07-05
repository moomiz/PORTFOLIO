import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GHEM from '@/public/GHEM.gif'
import PITCHIT from '@/public/pitchit.png'
import Nevvel from '@/public/Nevvel.png'
import user_bubble from '@/public/user_bubble.png'
import think from '@/public/think.png'
import plan from '@/public/plan.png'
import develop from '@/public/develop.png'
import ProjectItem from './ProjectItem';

function ProjectComponent() {
  const List = [
    {
      banner: Nevvel,
      name: "Nevvel",
      role: "프론트엔드 팀장",
      periode: "2023.04.10 ~ 2023.05.19",
      link: "https://github.com/moomiz/Nevvel"
    }
    ,
    {
      banner: GHEM,
      name: "GHEM",
      role: "프론트엔드",
      periode: "2023.02.20 ~ 2023.04.07",
      link: "https://github.com/moomiz/GHEM"
    },
    {
      banner: PITCHIT,
      name: "PITCHIT",
      role: "프론트엔드",
      periode: "2023.01.02 ~ 2023.02.17",
      link: "https://github.com/moomiz/PICHIT"

    }
  ]
  return (
    <Wrapper>
      <TextBox>
        <TextLine>
          사용자의 경험<TextImage>
            <Image
              src={user_bubble}
              alt='말풍선'
              width={120}
              height={100}
            />
          </TextImage>을 중시하며
        </TextLine>
        <TextLine>기획<TextImage>
          <Image
            src={think}
            alt='기획'
            width={120}
            height={100}
          />
        </TextImage>설계
          <TextImage>
            <Image
              src={plan}
              alt='설계'
              width={80}
              height={100}
            />
          </TextImage>
          개발
          <TextImage>
            <Image
              src={develop}
              alt='개발'
              width={120}
              height={100}
            />
          </TextImage>
        </TextLine>
        <TextLine>모두 참여한 프로젝트 입니다.</TextLine>
      </TextBox>
      <Title>Project</Title>
      <ProjectList>
        {List.map((project, index) =>
          <ProjectItem
            key={index}
            index={index}
            project={project} />)
        }
      </ProjectList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding-bottom: 5%;
`
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  color:white;
  padding:1rem;
`
const TextBox = styled.div`
height: 100%;
font-size: 60px;
margin-left: 10%;
margin-right: 10%;
text-align: center;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
${({ theme }) => theme.devices.tablet}{
  font-size: 30px;
}

${({ theme }) => theme.devices.mobile}{
  font-size: 20px;
}
`
const TextLine = styled.div`


`

const ProjectList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProjectTitle = styled.div`
  
`
const TextImage = styled.span`
  margin-left: 2rem;
  margin-right: 2rem;
`

export default ProjectComponent
