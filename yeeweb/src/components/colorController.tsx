import React, {ReactElement} from 'react';
import { ColorPicker } from './colorPicker/';
import { colorData, FlowColor } from '../index.d'
import { LightControl } from './lightControl'
import { makeStyles } from '@material-ui/styles';
const url = 'http://localhost:8000'

interface IncomingProps {
  handleColorChange: any,
  handleColorChangeSaturation:  any,
  currentHexColor: string,
  currentColor: colorData,
  handleBrightnessChange: any,
  currentBrightness: number,
  togglePowerState: any,
  powerStatus: boolean,
  colorFlow: FlowColor[],
  handleFlowColorChange: any,
}

export const ColorController = (props: IncomingProps): ReactElement => {
  const {
    handleColorChangeSaturation,
    handleColorChange,
    currentHexColor,
    currentColor,
    handleBrightnessChange,
    currentBrightness,
    powerStatus,
    togglePowerState,
    colorFlow,
    handleFlowColorChange,
  } = props

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
      <LightControl
        powerStatus={powerStatus}
        togglePowerState={togglePowerState}
        colorFlow={colorFlow}
        handleFlowColorChange={handleFlowColorChange}
      />
    </>
  )
}

export default ColorController;
