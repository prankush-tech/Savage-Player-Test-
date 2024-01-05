import * as THREE from 'three'
import { Water } from 'three-stdlib'
import { useRef, useMemo } from 'react'
import { useThree,extend, useLoader, useFrame } from '@react-three/fiber'

extend({ Water })


const Ocean = () => {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
      () => ({
        textureWidth: 1024,
        textureHeight: 1024,
        waterNormals,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x6e789c,
        distortionScale: 0.25,
        fog: false,
        format: gl.encoding
      }),
      [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta*0.25))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} position-y={-1} />
}

export default Ocean