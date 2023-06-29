import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const [pathName, setPathName] =useState("")
  useEffect(() => {
    setPathName(router.pathname)
  }, [router])

  return (
    <div>
      <Wrapper>
        <Btn pathName={pathName} now={'/about'} className='/about'><Link href="/about">about</Link></Btn>
        <Btn pathName={pathName} now={'/skill'} className='/skill'><Link href="/skill">skill</Link></Btn>
        <Btn pathName={pathName} now={"/project"}><Link href="/project">project</Link></Btn>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
position: fixed;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
padding: 1rem;
color: white;
font-weight: 700;
font-size: 18px;
mix-blend-mode: difference;
`
const Btn = styled.div<{pathName:string, now:string}>`
    border:1px solid ${(props)=>props.pathName ===props.now? "white":"transparent" };
    mix-blend-mode: difference;
    padding: 0.5rem;
    border-radius: 5px;
`
export default Navbar;
