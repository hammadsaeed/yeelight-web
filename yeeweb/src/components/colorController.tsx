import React, {ReactElement, useState} from 'react';
import { ColorPicker } from './colorPicker/';
import { colorData } from '../index.d'
import { Button } from '@material-ui/core';
import { sendComand } from './requests';
import { makeStyles } from '@material-ui/styles';
const url = 'http://localhost:8000'

interface IncomingProps {
  handleColorChange: any,
  handleColorChangeSaturation:  any,
  currentHexColor: string,
  currentColor: colorData,
  handleBrightnessChange: any,
  currentBrightness: number,
}

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


export const ColorController = (props: IncomingProps): ReactElement => {
  const { handleColorChangeSaturation, handleColorChange, currentHexColor, currentColor, handleBrightnessChange, currentBrightness} = props
  const [powerStatus, setCurrentPowerStatus] = useState(false);

  const classes = useStyles();

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
        currentBrightness={currentBrightness}
        handleBrightnessChange={handleBrightnessChange}
      />
      <div className={classes.buttonContainer}>
        <Button onClick={togglePowerState} variant="contained" color="primary" > POWER: {powerStatus ? 'ON': 'OFF'} </Button>
      </div>
    </>
  )
}

export default ColorController;
