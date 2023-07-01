import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import {motion} from "framer-motion"


const Section = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
  background: url("./img/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  justify-content: space-between;
  display: flex;
`;

const Left = styled.div`
  flex:2;
  display: flex;
  padding-left:2rem;
  flex-direction: column;
  justify-content: center;
  gap:20px;
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: 'Space Mono', monospace;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(0,0,0,0.2);
  -webkit-text-stroke: 1px rgba(0,0,0,0.5);
`;
const Titlewrap = styled.div`
  &:hover .h1_class{
    color: rgba(0,0,0,0.3);
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`;
const Line = styled.img`
  height:30px;
  background-color:#00000006;
`;
const Subtitle = styled.img`
  display: flex;
  justify-content: center;
  
`;
const Desc = styled.p`
  font-size:24px;
  background-color:#00000006;
  color: rgba(10,10,10,0.5);
`;
const Button = styled.button`
    align-items: center;
    width: 100%;
    display: flex;  
    flex-direction: row;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;   
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;        
    justify-content: center;
    padding: 10px;
    transition: background-color 400ms, border-color 400ms;   
`;
const Wrapper = styled.div`
    &:hover .button_class{
        background-color: rgba(100,108,255,0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    } 
`;
const Right = styled.div`
  flex:3;
`;


const Hero = () => {
  
  return (
    
    <Section>
        <Navbar />
        <Container>          
            <Left>
              <Titlewrap>
            
              <motion.div
                variants={{
                  hidden: {opacity: 0, y:75, },
                  visible: {opacity: 1, y:0, },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.8}}
                transition={{duration: 0.5, delay: 1, ease: "easeInOut"}}
              >
                <Title data-value="Hi! I am Suvan" className='h1_class' >Hi! I am Suvan</Title>
                </motion.div> 
                          
              </Titlewrap>  
              <WhatWeDo>
                  <Line src="./img/rarrow.png"/>
                  <Subtitle src="https://readme-typing-svg.herokuapp.com?font=Raleway&duration=3000&pause=1500&color=0a0a0a80&background=00000006&width=550&height=60&lines=I+am+a+Full-stack+Web+Developer+and+a+Software+Engineer;I+like+making+stuff+online;Scroll+to+know+more+about+me"/>
              </WhatWeDo>
              <Desc className='first_letter'>2nd year student at SRM Institute of Science and Technology</Desc>
              <Wrapper ><Button className="button_class">Learn More</Button></Wrapper>
              
            </Left>
           
            <Right></Right>
          
        </Container>
    </Section>
  )
}

export default Hero