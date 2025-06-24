

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Agora(props) {
  const { nodes, materials } = useGLTF('/models/agora.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Concrete-White.004']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Base.022']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Marble-Black.023']} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Marble-White.012']} />
    </group>
  )
}

useGLTF.preload('/models/agora.glb')
