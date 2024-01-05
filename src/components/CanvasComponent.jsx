import React, { Suspense } from 'react';
import { OrbitControls, Environment, BakeShadows, Loader, KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ecctrl, { EcctrlAnimation } from 'ecctrl';
import './Canvas.css';
import { Perf } from 'r3f-perf';
// import Box from './Box';
// import { Model } from './Model';
import Ocean from './Ocean';
import keyboardMap from './KeyboardMap';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import PlaneMesh from './Plane';
import animationSet from './AnimationSet';
import { Savage } from './Savage';
import { EcctrlJoystick } from "ecctrl";
import * as THREE from 'three'


const CanvasComponent = () => {
	const characterURL2 = '/Savage.glb';

	return (
		<React.Fragment>
			<div className="threejs">
			<EcctrlJoystick  joystickBaseProps={{
      material: new THREE.MeshBasicMaterial({ color: "white" })
    }} />
				<Canvas>
					<Suspense>
						<Perf position={"top-left"} />
						<OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.5} />
						<Environment files={'day.hdr'} path={'/'} background />
						<Ocean />
						<Physics>
							<KeyboardControls map={keyboardMap}>
								<Ecctrl  turnSpeed={10} maxVelLimit={4} jumpVel={4} camInitDis={-10} animated>
									<EcctrlAnimation characterURL={characterURL2} animationSet={animationSet}>
										<RigidBody>
											{/* <Model /> */}
											<Savage />
											<CuboidCollider position={[ 0, -1, 0 ]} args={[ 1000, 2, 1000 ]} />
										</RigidBody>
									</EcctrlAnimation>
								</Ecctrl>
							</KeyboardControls>

							<RigidBody type="fixed">
								<PlaneMesh />
							</RigidBody>
						</Physics>
						<BakeShadows />
					</Suspense>
				</Canvas>
			</div>
			<Loader />
		</React.Fragment>
	);
};

export default CanvasComponent;
