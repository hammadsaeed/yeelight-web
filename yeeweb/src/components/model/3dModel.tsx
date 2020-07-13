import React, { Suspense, ReactElement } from 'react';
import {
  Canvas,
  extend,
} from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makeStyles } from '@material-ui/styles';
import * as THREE from 'three';
import LampModel from './lampModel';

extend({ OrbitControls });

interface IncomingProps {
  handleOpenModel: Function;
  isChangingSkin: boolean;
  currentPreviewSkin: number;
}

const useStyles = makeStyles({
  root: {
    width:  '100%',
    height: '100%',
    zIndex: 1,
  },
  closeButton: {
    width:    '5%',
    height:   '5%',
    zIndex:   2,
    position: 'fixed',
    right:    '10%',
    color:    'black',
    top:      '1%',
  },
});

const Loading = (): ReactElement => (
  <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
    <sphereGeometry attach="geometry" args={[1, 16, 16]} />
    <meshStandardMaterial
      attach="material"
      color="white"
      transparent
      opacity={0.6}
      roughness={1}
      metalness={0}
    />
  </mesh>
);

// const Light = (props: {currentHexColor: string, currentBrightness: number}) => {
//   const {currentHexColor, currentBrightness} = props;
//   const lightPosition = new THREE.Vector3(5, -3, -1);
//   return (
//     <rectAreaLight
//       width={3}
//       height={3}
//       color={currentHexColor}
//       intensity={currentBrightness/100}
//       position={lightPosition}
//       // lookAt={}
//       // penumbra={1}
//       castShadow
//     />
//   );
// }


export const ThreeModel =  React.memo((props: {currentHexColor: string, currentBrightness: number}): ReactElement => {
  const {currentHexColor, currentBrightness} = props;
  const classes = useStyles();
  const lightPosition = new THREE.Vector3(0, 0, 1);
  console.log(currentHexColor)
  return (
    <>
      <Canvas
        className={classes.root}
        style={{
          top:      '0',
          left:     '0',
          position: 'fixed',
        }}
      >
        <directionalLight
          intensity={1}
          position={lightPosition}
          castShadow
          color={currentHexColor}
        />
        <ambientLight intensity={currentBrightness > 10 ? (currentBrightness/100) / 2 : 0.1} color={currentHexColor}/>
        <Suspense fallback={<Loading />}>
          <LampModel />
        </Suspense>
      </Canvas>
    </>
  );
});

export default ThreeModel;
