'use client'

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Preload, Points } from '@react-three/drei'
import { inSphere } from 'maath/random'
import * as THREE from 'three'

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null)

  const [geometry] = useState(() => {
    const sphere = inSphere(new Float32Array(5000), { radius: 1.2 })

    if (Array.from(sphere).some((v) => isNaN(v))) {
      console.error('❌ sphere contains NaN values!')
    }

    const bufferGeometry = new THREE.BufferGeometry()
    bufferGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(sphere, 3)
    )

    return bufferGeometry
  })

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} geometry={geometry} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
)

export default StarsCanvas
