import React from 'react';
import Image from 'next/image';
import Profile1 from '@/public/profile1.jpg'
import Profile2 from '@/public/profile2.jpg'
import Profile3 from '@/public/profile3.jpg'
import { styled } from 'styled-components';

function IntroComponent() {
    const texts = ['안','녕','하','세','요',' ','신','입',' ','F','R','O','N','T','-','E','N','D',' ','개','발','자',' ','김',
    '민','지','입','니','다']
    return (
        <Wrapper>
            <TextLine>
            {texts.map((text,index)=>(
                <Text key={index} delay={`${index * 100}ms`}>
                    {text}
                </Text>
            ))}
            </TextLine>
            {/* 안녕하세요 신입 <Text> 프론트엔드 개발자</Text>
            김민지 입니다. */}
            {/* <ImageList>
                <Image
                    src={Profile1}
                    alt='profile'
                    width={300}
                    height={300}
                />
                <Image
                    src={Profile2}
                    alt='profile'
                    width={300}
                    height={300}
                />
                <Image
                    src={Profile3}
                    alt='profile'
                    width={300}
                    height={300}
                />
            </ImageList>
            <div>생동감 있는 UI에 관심이 많습니다</div>
            <div>친절한 UX를 구현하기 위해 노력합니다</div>
            <div>클린코드 작성을 지향합니다</div> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: Pretendard-Regular;
    font-weight: 600;
    font-size: 32px;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
`
const TextLine = styled.div`
   animation: fade 3s ease-in-out;
  animation-fill-mode: forwards;
  @keyframes fade {
/* 효과를 동작시간 동안 0 ~ 1까지 */
	from {
		opacity: 0;
    
	}
	to {
		opacity: 1;
	}
}
`
const Text = styled.span<{delay:string}>`
font-family: Pretendard-Regular;
    opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  animation-delay: ${props => props.delay};
  @keyframes fadeIn{

      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
  }
`
const ImageList = styled.div`
    padding-top: 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    `
export default IntroComponent;