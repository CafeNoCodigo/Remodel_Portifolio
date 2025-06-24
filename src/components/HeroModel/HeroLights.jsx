import * as THREE from 'three';
const HeroLights = () => {
  return (
    <>
        <ambientLight intensity={0.2} color="#52aeff" />
        <directionalLight position={[5, 5, 5]} intensity={0.3}/>

        <primitive 
            object={new THREE.RectAreaLight('#52aeff', 15, 4, 2)}
            position={[2, 0, 3]}
        />
    </>
  )
}

export default HeroLights