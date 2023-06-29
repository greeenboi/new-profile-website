import React from 'react'
import Python from './Python'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Preload } from '@react-three/drei'

const Pythona = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>

      <Python />
      </Stage>
      <Preload all />
      <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  )
}

export default Pythona