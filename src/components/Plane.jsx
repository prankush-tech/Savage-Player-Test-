const PlaneMesh = () => {
    return (
        <mesh position-y={-1.8} >
            <boxGeometry args={[1000,1.5,1000]}  />
            <meshStandardMaterial color={'white'}/>
        </mesh>
    )
}

export default PlaneMesh