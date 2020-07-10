import React, {ReactElement, useState} from 'react';
import { ColorPicker } from './colorPicker';
import { BrightnessPicker } from './brightnessController';
import { toState, toColor } from '../lib/getColor';
import { Button } from '@material-ui/core';
import { sendComand } from './requests';
import { makeStyles } from '@material-ui/styles';
const url = 'http://localhost:8000'

const useStyles = makeStyles({
  buttonContainer: {
    position: 'absolute',
    width: '45%',
    height: '20%',
    bottom: '7%',
    left: '7%',
    background: '#FEFEFE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
  },
});


export const ColorController = (): ReactElement => {
  const [currentColor, setCurrentColor] = useState(toState('#000000'));
  const [currentBrightness, setCurrentBrightness] = useState<number>(30);
  const [powerStatus, setCurrentPowerStatus] = useState(false);
  const [currentHexColor, setCurrentHexColor] = useState('#D8AB62');
  const classes = useStyles();

  const handleColorChangeSaturation = (color: any) => {
    const newColor = toColor(color);
    setCurrentColor(newColor)
    setCurrentHexColor(newColor.hex)
    sendComand(`${url}/changeLight`, newColor.rgb)
  }

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

  const togglePowerState = () => {
    const newStatus = !powerStatus
    const status = sendComand(`${url}/setPower`, {powerStatus: newStatus});
    console.log(newStatus)
    setCurrentPowerStatus(newStatus)
    console.log(status)
  }

  return (
    <>
      <ColorPicker
        handleColorChange={handleColorChange}
        currentHexColor={currentHexColor}
        currentColor={currentColor}
        handleColorChangeSaturation={handleColorChangeSaturation}
      />
      <div className={classes.buttonContainer}>
        <BrightnessPicker
          currentBrightness={currentBrightness}
          handleBrightnessChange={handleBrightnessChange}
        />
        <Button onClick={togglePowerState} variant="contained" color="primary" > POWER: {powerStatus ? 'ON': 'OFF'} </Button>
      </div>
    </>
  )
}

export default ColorController;
