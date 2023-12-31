/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 Python.gltf --transform
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Python(props) {
  const { nodes, materials } = useGLTF('../Python-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-0.002, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={2.501} />
    </group>
  )
}

useGLTF.preload('/Python-transformed.glb')
