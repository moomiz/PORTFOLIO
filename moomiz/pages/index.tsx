import { styled } from "styled-components"
import MainComponent from "@/components/Main/MainComponent"
import ModelComponent from "@/components/model/ModelComponent"

export default function Home() {

  return (
    <Wrapper>
      <MainComponent />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  /* background-color: ${({theme})=>theme.color.background}; */
`