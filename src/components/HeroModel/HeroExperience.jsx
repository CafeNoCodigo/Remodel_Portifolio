import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const isTable = false;

const HeroExperience = () => {
  return (
    <Canvas style={{ background: '#111' }} camera={{ position: [0, 0, 15], fov: 45}}>
        <ambientLight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5,5,5]} intensity={1.5}/>

        <OrbitControls
            enablePan={false}
            enableZoom={!isTable}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI /  2}
        />

        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color="blue"/>
        </mesh>
    </Canvas>

    
  )
}

export default HeroExperience