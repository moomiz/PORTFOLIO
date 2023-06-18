import { styled } from "styled-components"
import Image from "next/image"
import first from "@/public/firstcloud.png"
import second from "@/public/secondcloud.png"
import Third from "@/public/Thirdcloud.png"
import { useEffect } from "react"
import LogoComponent from "@/components/Main/LogoComponent"
import TitleComponent from "@/components/Main/TitleComponent"
import About from "./about"

export default function Home() {

  return (
    <>
    <LogoComponent />
    <TitleComponent />
    <About />
    </>
  )
}

