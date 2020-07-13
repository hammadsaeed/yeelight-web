import React, {useState} from 'react';
import { toState, toColor } from './lib/getColor';
import { sendComand } from './components/requests';
import { ColorController } from './components/colorController'
import { Heading } from './components/heading'
import { Background } from './components/background'
import { makeStyles } from '@material-ui/styles';
import { ThreeModel } from './components/model/3dModel'
import './App.css'
const url = 'http://localhost:8000'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    fontFamily: '"HelveticaNeue"'
  },
  lampModel: {
    position: 'absolute',
    zIndex: 0,
  }
});

function App() {
  const [currentColor, setCurrentColor] = useState(toState('#00FFE6'));
  const [currentHexColor, setCurrentHexColor] = useState('#00FFE6');
  const [currentBrightness, setCurrentBrightness] = useState<number>(30);

  const handleColorChange = (color: any) => {
    setCurrentColor(color)
    setCurrentHexColor(color.hex)
    sendComand(`${url}/changeLight`, color.rgb)
  }

  const handleBrightnessChange = (event : any, currentBrightnessSlide: number) => {
    setCurrentBrightness(currentBrightnessSlide)
    const status = sendComand(`${url}/setBrightness`, {currentBrightnessSlide});
    console.log(status)
  }
  const handleColorChangeSaturation = (color: any) => {
    const newColor = toColor(color);
    setCurrentColor(newColor)
    setCurrentHexColor(newColor.hex)
    sendComand(`${url}/changeLight`, newColor.rgb)
  }

  // const getStatus = (event : any, currentBrightnessSlide: number) => {
  //   const body= {parms: 'power'}
  //   const status = sendComand(`${url}/getStatus`, body);
  //   console.log(status)
  // }

  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Background/>
        <div className={classes.lampModel}>
          <ThreeModel
            currentHexColor={currentHexColor}
            currentBrightness={currentBrightness}
          />
        </div>

        <Heading />
        {/* <button onClick={(e)=> getStatus(e,1)} style={{position: 'absolute', left: '1%'}}> GetStatus </button> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ColorController
          handleColorChange={handleColorChange}
          handleColorChangeSaturation={handleColorChangeSaturation}
          currentHexColor={currentHexColor}
          currentColor={currentColor}
          handleBrightnessChange={handleBrightnessChange}
          currentBrightness={currentBrightness}
        />
      </div>
  );
}

export default App;
