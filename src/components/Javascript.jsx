/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 javascript.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function JavaScript(props) {
  const { nodes, materials } = useGLTF('../javascript-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve002.geometry} material={materials['Material.001']} position={[-0.038, -0.018, -0.035]} rotation={[Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/javascript-transformed.glb')
