import React, {ReactElement, useState} from 'react';
import { ColorPicker } from './colorPicker';
import { BrightnessPicker } from './brightnessController';
import { changeBrightness, changeLight } from './requests';
const url = 'http://localhost:8000'


export const ColorController = (): ReactElement => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentBrightness, setCurrentBrightness] = useState<number>(30);

  const handleColorChange = (color: any) => {
    console.log(color)
    setCurrentColor(color.hex)
    changeLight(`${url}/changeLight`, color.rgb)
  }

  const handleBrightnessChange = (event : any, currentBrightnessSlide: number) => {
    changeBrightness(`${url}/setBrightness`, {currentBrightnessSlide});
    setCurrentBrightness(currentBrightnessSlide)
    console.log(`Setting brightness to: ${currentBrightnessSlide}`)
  }

  return (
    <>
      <ColorPicker
        handleColorChange={handleColorChange}
        currentColor={currentColor}
      />
      <BrightnessPicker
        currentBrightness={currentBrightness}
        handleBrightnessChange={handleBrightnessChange}
      />
    </>
  )
}

export default ColorController;
