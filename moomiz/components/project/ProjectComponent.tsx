import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GHEM from '@/public/GHEM.gif'
import PITCHIT from '@/public/pitchit.png'
import Nevvel from '@/public/Nevvel.png'
import ProjectItem from './ProjectItem';

function ProjectComponent() {
  const List = [
    {
      banner:Nevvel,
      name:"Nevvel",
      role:"프론트엔드 팀장",
      periode:"2023.04.10 ~ 2023.05.19",
      link:"https://github.com/moomiz/Nevvel"
    }
    ,
    {
      banner:GHEM,
      name:"GHEM",
      role:"프론트엔드",
      periode:"2023.02.20 ~ 2023.04.07",
      link:"https://github.com/moomiz/GHEM"
    },
    {
      banner:PITCHIT,
      name:"PITCHIT",
      role:"프론트엔드",
      periode:"2023.01.02 ~ 2023.02.17",
      link:"https://github.com/moomiz/PICHIT"

    }
  ]
  return (
    <Wrapper>
      <Title>Project</Title>
      <ProjectList>
        {List.map((project,index)=>
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
  padding-top: 5%;
  padding-bottom: 5%;
`
const Title = styled.div`
  padding-bottom: 5%;
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

export default ProjectComponent
