import React from 'react'
import Javascript from './JavaScript'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Preload } from '@react-three/drei'

const JS = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>

      <Javascript />
      </Stage>
      <Preload all />
      <OrbitControls enableZoom={false}  autoRotate={true}/>
    </Canvas>
  )
}

export default JS