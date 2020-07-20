import React, { useRef, ReactElement } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default (): ReactElement => {
  const group = useRef();
  const mesh = useRef<any>();
  const gltfModelMine = useLoader(GLTFLoader, '/assets/lamp.glb') as any;
  const newScale3 = new THREE.Vector3(0.040, 0.040, 0.040);
  const newRotation =new THREE.Euler( 1.5708,0, 3.5, 'XYZ');
  const newPosition3 = new THREE.Vector3(4, -3, -0.5);
  const newMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  console.log(gltfModelMine)
  console.log(gltfModelMine.materials)
  console.log(gltfModelMine.materials.wire_154185229)
  // console.log(gltfModelMine.nodes)
  // useFrame((state) => {
  //   mesh.current.rotation.z += 0.01
  // });
  return (
    <group ref={group}>
      {/* <mesh
            ref={mesh}
            visible
            geometry={gltfModelMine.nodes[`IKEA Storm Floor Lamp_2`].geometry}
            scale={newScale3}
            position={newPosition3}
            rotation={newRotation}
            // material={newMaterial}
            material={gltfModelMine.materials.wire_154185229}
            customDepthMaterial={gltfModelMine.materials.wire_154185229.map}
        /> */}
      {[0,1,2].map((x:number, i: number) => {
        return(
          <mesh
            key={`meshNo-${i}`}
            ref={mesh}
            visible
            geometry={gltfModelMine.nodes[`IKEA Storm Floor Lamp_${x}`].geometry}
            scale={newScale3}
            position={newPosition3}
            rotation={newRotation}
            material={gltfModelMine.materials.wire_154185229}
            // customDepthMaterial={}
          />
        )
      })}
    </group>
  );
};
