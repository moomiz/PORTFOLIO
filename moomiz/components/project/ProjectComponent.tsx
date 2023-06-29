import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GHEM from '@/public/GHEM.gif'
import PITCHIT from '@/public/pitchit.png'

function ProjectComponent() {
  return (
    <Wrapper>
      <Title>Project</Title>
      <ProjectList>
        <Image 
        src={GHEM}
        alt='GHEM'
        height={240}
        width={480}
        />
        <Image 
        src={PITCHIT}
        alt='PITCHIT'
        height={240}
        width={480}
        />
        <div>
          PITCHIT</div>
        <div>GHEM</div>
        <div>Nevvel</div>
      </ProjectList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100%;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  padding-bottom: 5%;
`
const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProjectComponent
