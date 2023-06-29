import React, { useEffect } from "react"
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";




const Section = styled.div`
  height: 100vh;
  background-color:rgb(80,80,80);
  scroll-snap-align: center;
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
  gap:20px;
  padding:2rem;
  background-color:rgba(90,90,90,0.2);
`



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
            <Card-text><p>
              
              I have always been intrigued by the intricacies of the digital world.
              It started when I made my first C program all the way back in 2015 with the help of my dad. It was a simple hello world, but it set me upon the path I currently follow.
              Then came my first IOT project at my 9th grade, a simple Raspberry PI 3B+ running rpi os, My first Website, My first 2D Game (mario), and many more.
              Now I aspire To make The coolest Website, The Best Game and the Smartest AI.

            </p></Card-text>
        </motion.div>
        </Card>
        </Right>
      </Container>      
    </Section>
  )
}

export default Who

