import React from 'react'
import Link from 'next/link'
import { styled } from 'styled-components';

function Navbar() {
  return (
    <></>
    // <Wrapper>
    //   <Link href="about">about</Link>
    //   <Link href="skill">skill</Link>
    //   <Link href="/">home</Link>
    //   <Link href="project">project</Link>
    //   <div>github</div>
    // </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
padding: 1rem;
color: ${({theme})=> theme.color.point};
font-weight: 700;
font-size: 18px;
text-shadow: 2px 2px 2px gray
`



export default Navbar;
