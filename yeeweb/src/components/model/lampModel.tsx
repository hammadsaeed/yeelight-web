import React, { useRef, ReactElement } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default (): ReactElement => {
  const group = useRef();
  const mesh = useRef<any>();
  const gltfModelMine = useLoader(GLTFLoader, '/assets/lamp-model.glb') as any;
  const newScale3 = new THREE.Vector3(0.035, 0.035, 0.035);
  const newRotation =new THREE.Euler( 1.5708,0, 3.5, 'XYZ');
  const newPosition3 = new THREE.Vector3(5, -3, -1);
  console.log(gltfModelMine.materials.wire_108008136)
  console.log(gltfModelMine)
  console.log(gltfModelMine.nodes)
  useFrame((state) => {
    mesh.current.rotation.z += 0.01
  });
  return (
    <group ref={group}>
      {[0,1,2].map((x:number) => {
        return(
          <mesh
            ref={mesh}
            visible
            geometry={gltfModelMine.nodes[`IKEA Storm Floor Lamp_${x}`].geometry}
            scale={newScale3}
            position={newPosition3}
            rotation={newRotation}
            material={gltfModelMine.materials.wire_108008136}
            // customDepthMaterial={}
          />
        )
      })}
    </group>
  );
};
