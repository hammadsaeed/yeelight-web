import React, {ReactElement, useState} from 'react';
import { SketchPicker  } from 'react-color';

interface props {
  handleColorChange: any;
  currentColor: string;
}

export const ColorPicker = (props: props): ReactElement => {

  const { handleColorChange, currentColor } = props;

  return (
    <div style={{padding: '2%'}}>
      <SketchPicker
        onChangeComplete={ handleColorChange }
        color={currentColor}
      />
    </div>
  )
}
