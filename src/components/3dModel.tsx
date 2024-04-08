import { Canvas, } from '@react-three/fiber'
import { Box, CameraControls, Gltf, Grid, useProgress } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { DirectionalLightHelper, Vector3 } from 'three'
import { Html } from '@react-three/drei'
import { BoltIcon } from '@heroicons/react/24/outline'
import InlineLoading from './inlineLoading'
interface NightLampProps {
  position: number[]
  color: string
}

const NightLamp: React.FC<NightLampProps> = ({ position, color }) => {
  const [powerState, setPowerState] = useState(false)
  return (
    <>
      <Box
        position={new Vector3(...position)}
        onPointerDown={() => setPowerState(!powerState)}
        scale={0.5} >
        <meshStandardMaterial visible={false} />
      </Box>
      {!powerState && (
        <Html position={new Vector3(...position)}>
          <div
            className="absolute -translate-x-1/2 -translate-y-full w-6 rounded-full
              pointer-events-none aspect-square bg-grayA/30 backdrop-blur flex items-center justify-center">
            <BoltIcon className="w-4/5 aspect-square text-zinc-100" />
          </div>
        </Html>
      )}
      <pointLight
        position={new Vector3(...position)}
        castShadow receiveShadow
        color={color}
        scale={0.1}
        intensity={powerState ? 5 : 0}
      />
    </>
  )
}
const Scene = () => {
  const { progress } = useProgress()
  return (
    <Suspense fallback={<InlineLoading progress={progress} />}>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 100, position: [5, 0, 5] }}
      >
        <directionalLight
          position={[0, 3, 3]}
          castShadow receiveShadow
          scale={0.5}
          intensity={5}
          color='#FFF8DE'
          ref={dirLight => {
            if (dirLight) {
              dirLight.target.position.set(0, 1, 0)
              dirLight.add(new DirectionalLightHelper(dirLight, 10, '#fef08a'))
            }
          }} />
        <NightLamp position={[-1.227, -1.14, -2.74]} color='#561496' />
        <NightLamp position={[1.227, -1.14, -2.74]} color='#561496' />
        <Gltf src='/model.glb' castShadow receiveShadow deep
        />
        <Grid position={[0, -2, 0]} scale={[1, 0, 1]} infiniteGrid receiveShadow
          sectionColor='#525252' cellColor='#525252' />
        <CameraControls distance={8} minDistance={1} maxDistance={10}
        />
        <ambientLight intensity={1} />
      </Canvas>
    </Suspense>
  )
}
export default Scene
