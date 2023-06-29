import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GHEM from '@/public/GHEM.gif'
import PITCHIT from '@/public/pitchit.png'
import Nevvel from '@/public/Nevvel.png'

function ProjectComponent() {
  return (
    <Wrapper>
      <Title>Project</Title>
      <ProjectList>
        <ProjectItem>
        <Image 
        src={GHEM}
        alt='GHEM'
        height={280}
        width={480}
        />
        <ProjectTitle>GHEM</ProjectTitle>
        </ProjectItem>
        <ProjectItem>
        <Image 
        src={PITCHIT}
        alt='PITCHIT'
        height={280}
        width={480}
        />
        <ProjectTitle>PITCHIT</ProjectTitle>
        </ProjectItem>
        <ProjectItem>
        <Image 
        src={Nevvel}
        alt='Nevvel'
        height={280}
        width={480}
        />
        <ProjectTitle>Nevvel</ProjectTitle>
        </ProjectItem>
      </ProjectList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
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
const ProjectItem = styled.div`
    width: 100%;
    display: flex;
  padding: 5%;
  justify-content: space-between;
  align-items: center;
`
const ProjectTitle = styled.div`
  
`

export default ProjectComponent
