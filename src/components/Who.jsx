import React, { useEffect } from "react"
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";




const Section = styled.div`
  height: 100vh;
  
  scroll-snap-align: center;
  background: url("./img/pg2-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  justify-content: space-between;
  display: flex;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20;
  flex:3;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;
  flex:2;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0px;
  padding:3rem;
  background-color:rgba(90,90,90,0.15);
  border-radius:2px;
`
const Card_text = styled.div`
  font-family: 'Poppins', sans-serif;
  line-height:30px;
  word-wrap: break-word;
`

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Raleway',sans-serif;
  
  color: rgb(255,255,255);
  
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`;


const Who = () => {

  

  return (
    <Section>
      <Container>
        <Left>
          <Canvas>        
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[2,3,1]} />
            <Sphere args={[1,100,200]} scale={2}>
            <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2} />
            </Sphere>
            <Preload all />
          </Canvas> 
        </Left>
        <Right>
        <Title>About Me</Title>
        <Card>
        <motion.div
                variants={{
                  hidden: {opacity: 0, y:75, },
                  visible: {opacity: 1, y:0, },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount: 0.8}}
                transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}
              >
            <Card_text>
            <p className="first_letter">
              I have always been intrigued by the intricacies of the digital world.
            </p>
            <p>
              It started when I made my first C program all the way back in 2015 with the help of my dad. It was a simple hello world, but it set me upon the path I currently follow.
            </p>
            <p>
               Then came my first IOT project , a simple Raspberry PI 3B+ running noobs os, My first Website, My first 2D Game (mario), and many more.
            </p>
            <p>
              In my free time, I make things that I find interesting and uploading them to my Github.
            </p>
            
            </Card_text>
        </motion.div>
        </Card>
        </Right>
      </Container>      
    </Section>
  )
}

export default Who

