import * as THREE from 'three';
const HeroLights = () => {
  return (
    <>
        <ambientLight intensity={0.2} color="#FF007F" />
        <directionalLight position={[5, 5, 5]} intensity={0.3}/>

        <primitive 
            object={new THREE.RectAreaLight('#FF007F', 7, 4, 2)}
            position={[2, 0, 3]}
        />
    </>
  )
}

export default HeroLights