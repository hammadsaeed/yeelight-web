import React, { Suspense, ReactElement,useRef } from 'react';
import {
  Canvas,
    useThree,
    useFrame,
  extend,
} from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makeStyles } from '@material-ui/styles';
import * as THREE from 'three';
import LampModel from './lampModel';
// import { SvgGlow } from './glowEffect'
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
  <mesh visible position={[4, 0, 0]} rotation={[0, 0, 0]}>
    <sphereGeometry attach="geometry" args={[1, 16, 16]} />
    <meshStandardMaterial
      attach="material"
      color="white"
      transparent
      opacity={1}
      roughness={1}
      metalness={0.5}
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

const CameraControls = (): ReactElement => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<any>();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

export const ThreeModel =  React.memo((props: {currentHexColor: string, currentBrightness: number}): ReactElement => {
  const {currentHexColor, currentBrightness} = props;
  const rendercount = useRef(0)
  const classes = useStyles();
  const lightPosition = new THREE.Vector3(4, -1, 60);

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
        {/* <directionalLight
          intensity={0.5}
          position={lightPosition}
        /> */}
        <CameraControls />
        <directionalLight
          intensity={0.3}
          position={lightPosition}
        />
        {/* <directionalLight
          intensity={0.5}
          position={lightPosition}
          castShadow
          // color={currentHexColor}
          color='yellow'
        /> */}

        {/* <ambientLight intensity={currentBrightness > 10 ? (currentBrightness/100) / 2 : 0.1} color='blue'/> */}
        <Suspense fallback={<Loading />}>
          <LampModel />
          {/* <Loading /> */}
        </Suspense>
      </Canvas>
    </>
  );
});

export default ThreeModel;
