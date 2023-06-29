import React from 'react'
import Reacta from './Reacta'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Preload } from '@react-three/drei'

const Reactas = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>

      <Reacta />
      </Stage>
      <Preload all />
      <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  )
}

export default Reactas