import React, { useState } from 'react';
import { styled } from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { MdPlayArrow } from 'react-icons/md'

type SkillButtonProps = {
    Logo: StaticImageData;
    Name: string;
}

function SkillButton({ Logo, Name }: SkillButtonProps) {
    const [state, setState] = useState("")
    const ClickArrowButton = () => {
        if (state == "") {
            setState(`${Name}`)
        }
        else {
            setState("")
        }
    }
    return (
        <SkillItem>
            <ArrowButton onClick={ClickArrowButton} state={state} Name={Name}>
                <MdPlayArrow />
            </ArrowButton>
            <Image
                src={Logo}
                alt={Name}
                height={50}
                width={50}
            />{Name}
        </SkillItem>
    )
}

const ArrowButton = styled.button<{ state: string, Name: string }>`
    transform: rotate(${(props) => (props.state == props.Name ? "90deg" : "0deg")});

`
const SkillItem = styled.div`
    display: flex;
    width: 10rem;
    justify-content:space-around ;
    font-weight: 800;
    align-items: center;
`

export default SkillButton
