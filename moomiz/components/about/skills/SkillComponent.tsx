import React,{use, useEffect, useState} from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

import Python from '@/public/python.png';
import ReactLogo from '@/public/react.png';
import JavascriptLogo from '@/public/Javascript.png';
import TypescriptLogo from '@/public/Typescript.png';
import VueLogo from '@/public/vue.png'

import SkillButton from '@/components/about/skills/SkillButton'


function SkillComponent() {
    
    return (
        <Wrapper>
            <SkillTitle>skills</SkillTitle>
            <SkillList>
               <SkillButton  Logo={ReactLogo} Name={"react"}  />
               <SkillButton Logo={VueLogo} Name={"Vue"} />
               <SkillButton Logo={Python} Name={"Python"} />
               <SkillButton Logo={JavascriptLogo} Name={"Javascript"} />
               <SkillButton Logo={TypescriptLogo} Name={"Typescript"} />
            </SkillList>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: white;
    height: 100vh;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    perspective: -400px;
    transform: translate3d(0px, 0px, -200px);
`
const SkillTitle = styled.div`
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
`
const SkillList = styled.div`
    padding-top: 2rem;
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: space-between;
`


export default SkillComponent
