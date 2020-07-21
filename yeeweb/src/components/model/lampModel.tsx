import React, { useRef, ReactElement } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default (): ReactElement => {
  const mesh = useRef<any>();
  const gltfModelMine = useLoader(GLTFLoader, '/assets/lamp-model-new.glb') as any;
  const gltfNewLamp = useLoader(GLTFLoader, '/assets/lamp-2.glb') as any;
  console.log(gltfNewLamp)
  const newScale3 = new THREE.Vector3(0.04, 0.04, 0.04);
  const newRotation =new THREE.Euler( 1.5708,0, 3.5, 'XYZ');
  const newPosition3 = new THREE.Vector3(4.5, -3, -1);
  console.log(gltfModelMine)
  // console.log(gltfModelMine.materials)
  // console.log(gltfModelMine.materials.wire_154185229)
  // console.log(gltfModelMine.nodes)
  // gltfModelMine['_$'].map((x: any) => {
  //   console.log(x);
  // })

  const bla = gltfModelMine.parser.cache.removeAll();
    console.log(bla)
  useFrame((state) => {
    // mesh.current.rotation.z += 0.01
  });
  return (
    <group >
      <scene>
        {/* <pointLight name="Light001_Orientation" color='green' rotation={gltfModelMine.nodes.Light.rotation} position={gltfModelMine.nodes.Light.position} /> */}
        {[0,2,1].map((x:number, i: number) => {
          return(
            <mesh
              key={`meshNo-${i}`}
              ref={mesh}
              visible
              geometry={gltfModelMine.nodes[`IKEA Storm Floor Lamp_${x}`].geometry}
              scale={newScale3}
              position={newPosition3}
              rotation={newRotation}
              material={gltfModelMine.materials.wire_108008136}

            />
          )
        })}
        {/* {[1,0].map((x:number, i: number) => {
          return(
            <mesh
              key={`meshNo-${i}`}
              ref={mesh}
              visible
              geometry={gltfNewLamp.nodes[`dlea04_${x}`].geometry}
              scale={new THREE.Vector3(0.07, 0.07, 0.07)}
              position={newPosition3}
              rotation={new THREE.Euler( 1.5708,0, 3.5, 'XYZ')}
              material={gltfNewLamp.materials.m_1}

            />
          )
        })} */}
      </scene>
    </group>
  );
};
