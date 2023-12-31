import React from 'react'
import Laptop from './Laptop'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const Cool = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.7} adjustCamera={1.3}>

      <Laptop />
      </Stage>
      <OrbitControls enableZoom={true} autoRotate={true} />
    </Canvas>
  )
}

export default Cool