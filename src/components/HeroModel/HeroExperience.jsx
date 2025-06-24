import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Agora } from "./Agora.jsx";
import HeroLights from "./HeroLights.jsx";
 
const HeroExperience = () => {
  const isTablet= useMediaQuery({ query: '(max-width: 1024px)'});
  const isMobile= useMediaQuery({ query: '(max-width: 786px)'});
  return (
    <Canvas camera={{ Position: [0, 0, -15], fov: 45}}>

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance = {70}
        minDistance={15}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights/>
      <group
        scale={isMobile? 0.17 : 0.2}
        position={isMobile? [0, -2.5, 0] : [0, -4, 0]}
        rotation={[0, -Math.PI/4, 0]}
      >
        
        <Agora/>
      </group>
    </Canvas>
  )
}

export default HeroExperience