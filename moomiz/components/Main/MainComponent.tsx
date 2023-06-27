import React from 'react'
import { styled } from "styled-components"
import ThreeObject from "@/components/model/ThreeObject"
import LogoComponent from "@/components/Main/LogoComponent"
import TitleComponent from "@/components/Main/TitleComponent"
import ModelComponent from '../model/ModelComponent'
import RoomComponent from './RoomComponent'

function MainComponent() {
    return (
        <>
            <Wrapper>
                <LogoComponent />
                <RoomComponent />
            </Wrapper>
            <Model>
                <ModelComponent />
            </Model>
        </>
    )
}
const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`

const Model = styled.div`
z-index: 0;
  position: fixed;
  top:0;
`

export default MainComponent
