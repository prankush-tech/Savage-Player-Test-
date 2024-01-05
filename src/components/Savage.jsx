/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Savage(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Savage.glb");
  const { actions } = useAnimations(animations, group);

  console.log(animations)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="MaleBruteA_Meshes"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.034} position-y={-1.9}>
          <skinnedMesh
            name="BattleAxe_GEO"
            geometry={nodes.BattleAxe_GEO.geometry}
            material={materials.blinn7}
            skeleton={nodes.BattleAxe_GEO.skeleton}
          />
          <group name="MaleBruteA_Body">
            <skinnedMesh
              name="Mesh007"
              geometry={nodes.Mesh007.geometry}
              material={materials.Body_MAT4}
              skeleton={nodes.Mesh007.skeleton}
            />
            <skinnedMesh
              name="Mesh007_1"
              geometry={nodes.Mesh007_1.geometry}
              material={materials.EyeSpec_MAT2}
              skeleton={nodes.Mesh007_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="MaleBruteA_Bottoms"
            geometry={nodes.MaleBruteA_Bottoms.geometry}
            material={materials.MaleBruteA_Bottom5}
            skeleton={nodes.MaleBruteA_Bottoms.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Earrings"
            geometry={nodes.MaleBruteA_Earrings.geometry}
            material={materials.phong4}
            skeleton={nodes.MaleBruteA_Earrings.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Eyelashes"
            geometry={nodes.MaleBruteA_Eyelashes.geometry}
            material={materials.Lashes_MAT4}
            skeleton={nodes.MaleBruteA_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Eyes"
            geometry={nodes.MaleBruteA_Eyes.geometry}
            material={materials.EyeSpec_MAT4}
            skeleton={nodes.MaleBruteA_Eyes.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Hair"
            geometry={nodes.MaleBruteA_Hair.geometry}
            material={materials.MaleBruteA_Hair6}
            skeleton={nodes.MaleBruteA_Hair.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Moustaches"
            geometry={nodes.MaleBruteA_Moustaches.geometry}
            material={materials.MaleBruteA_Moustache5}
            skeleton={nodes.MaleBruteA_Moustaches.skeleton}
          />
          <skinnedMesh
            name="MaleBruteA_Shoes"
            geometry={nodes.MaleBruteA_Shoes.geometry}
            material={materials.MaleBruteA_Shoes6}
            skeleton={nodes.MaleBruteA_Shoes.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Savage.glb");
