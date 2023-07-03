import Image, { StaticImageData } from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BsCalendarEvent, BsFillPersonCheckFill } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im';
import {BiDetail} from 'react-icons/bi'
type ProjectItemProp = {
    index: number;
    project: {
        banner: StaticImageData;
        name: string;
        role: string;
        periode: string;
        link: string
    }
}
function ProjectItem({ project, index }: ProjectItemProp) {
    const router = useRouter();
    const DetailClick = ()=>{
        router.push({
            pathname:"/project/[id]",
            query:{id:project.name}
        })
    }

    return (
        <Wrapper index={index}>
            <TextBox>
                <Title>{project.name}</Title>
                <Role><BsFillPersonCheckFill size={18} />{project.role}</Role>
                <Period><BsCalendarEvent size={18} />
                    {project.periode}</Period>
                <Git>
                    <ImGithub size={24} /><GitLink href={project.link} target='_blank'>git repository</GitLink>
                </Git>
                <Detail onClick={DetailClick}><BiDetail size={24} />상세보기</Detail>
            </TextBox>
            <TitleImage>
                <Image
                    src={project.banner}
                    alt={project.name}
                    fill
                />
            </TitleImage>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ index: number }>`
  width: 80%;
  height: 100%;
  display: flex;
  padding: 5%;
  justify-content: space-between;
  flex-direction: ${(props)=>props.index % 2 === 0 ?("row"):("row-reverse")};
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  ${({ theme }) => theme.devices.tablet}{
    width: 100%;
    height: 100%;
  }
  `
const TitleImage = styled.div`
    width: 480px;
    height: 280px;
    position: relative;
    object-fit: cover;
    ${({ theme }) => theme.devices.tablet}{
    width: 240px;
    height: 140px;
  }
    
`
const TextBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    div,button{
        margin-top: 1rem;

    }

`
const Title = styled.div`
`
const Role = styled.div`
    font-size: ${({ theme }) => theme.fontSize.body1};
    
    
`
const Period = styled.div`
font-size: ${({ theme }) => theme.fontSize.body1};
    
`
const Git =styled.button`
color:white;
display: flex;
align-items:center;
`
const GitLink = styled.a`
    font-size: ${({ theme }) => theme.fontSize.body1};
`
const Detail = styled.button`
    color:white;
    display: flex;
    text-align: center;
    align-items: center;
`

export default ProjectItem
