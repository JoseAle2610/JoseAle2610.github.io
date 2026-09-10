import {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import background from '@/assets/background.jpg' 
import Container from '@/components/Container'
import {ButtonWhite, ButtonTransparent} from '@/components/Button'
import {FullContainerBackground} from '@/components/FullContainer'
import info from '@/config'
import { ListSocial, Social } from './Contact'
import { BlinkAnimation, slideLeftAnimation, slideTopAnimation } from '@/components/Animation'
import { useNavigate } from '@/hooks/useNavigate'
import { breackPoints } from '@/components/Grid'



const Blink = styled.span`
  animation-name: ${BlinkAnimation};
  animation-duration: .9s;
  animation-iteration-count: infinite;
`


const HomeContainer = styled.main`
	animation: ${slideLeftAnimation} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  ul a {
    animation: ${slideTopAnimation} 0.5s ease both;
  }
  a {
    animation: ${slideTopAnimation} 0.5s ease both;
  }
  h1{
    font-size: 30px;
  }

  @media (min-width: ${breackPoints.md}){
    h1{
      font-size: 70px;
    }
  }


  ${props => {
    let css = ''
    let delay = 0.3
    for (let index = 0; index < props.$aChilds; index++) {
      css += `
        ul a:nth-child(${index+1}){
          animation-delay: ${delay * index}s;
        }
      `
    }
    return css
  }}

`

export const Home = () => {
  const words = info.typeWrite
  const containerRef = useRef();

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [writeFinish, setWriteFinish] = useState(false);
  const [navigate] = useNavigate()


  // typeWriter
  useEffect(() => {
    const container = containerRef.current

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / container.offsetWidth) * 10;
      const y = (clientY / container.offsetHeight) * 10;
      container.style.backgroundPosition = `bottom ${x+29}% left ${y}%`;
    }
    container.addEventListener('mousemove', handleMouseMove);

    if(index === words.length){
      setWriteFinish(true)
      return
    }

    if(subIndex === words[index].length - 1){
      setIndex(prev => prev +1)
      setSubIndex(0)
    }
    const timeOutWriter = setTimeout(() => {
      setSubIndex(prev => prev + 1)
    }, 70);

    return () => {
      clearTimeout(timeOutWriter)
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [subIndex, index, words, containerRef]);
 
  return (
    <FullContainerBackground src={background} ref={containerRef}>
      <Container>
        <HomeContainer $aChilds={info.social.length}>
          <h1>{info.greeting}<br/>
            {words.map((line, i) => <div key={i}>
              {(i === index || i === words.length) && <>
                {line.substring(0,subIndex)}<Blink>|</Blink></>
              }
              {i < index && line}
              {(index === words.length && index === i+1)  && <Blink>|</Blink>}
            </div>)}
          </h1>
          <ButtonTransparent href='/about' onClick={navigate}>Más sobre mí</ButtonTransparent>
          <ButtonWhite href="/curriculum-jose-suarez.pdf" download>Descargar CV</ButtonWhite>
          <ListSocial style={{display: !writeFinish && 'none'}}>
            {info.social.map((elem, index) => (
              <Social key={index} link={elem.link} icon={elem.icon} tooltip={elem.label} transparent />
            ))}
          </ListSocial>
        </HomeContainer>
      </Container>
    </FullContainerBackground>
  )
}
