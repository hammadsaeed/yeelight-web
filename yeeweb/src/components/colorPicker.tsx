import React, {ReactElement, } from 'react';
import { CirclePicker, HuePicker  } from 'react-color';
import { colorData } from '../index.d'
import { MyPointer } from './pointer'
import { EditableInput, Saturation  } from 'react-color/lib/components/common'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface props {
  handleColorChange: any;
  currentHexColor: string;
  currentColor: colorData;
  handleColorChangeSaturation: any;
}
const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '45%',
    height: '40%',
    top: '25%',
    left: '7%',
    background: '#FEFEFE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
  },
  heading: {
    fontSize: '12vw',
    position: 'relative',
    margin: 0,
    top: '15%',
    left: '10%',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '10vw',
    letterSpacing: '10px',
    color: '#FFFFFF',
  },
  gridRoot: {
    flexGrow: 1,
  },
  saturationBox: {
    position: 'absolute',
    width: '45%',
    height: '80%',
    top: '5%',
    left: '7%',
    borderRadius: '100%',
  },
  colorSettingsContainer: {
    left: '55%',
    position: 'relative',
  },
});

export const ColorPicker = (props: props): ReactElement => {
  const { handleColorChange, currentColor, currentHexColor, handleColorChangeSaturation } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.saturationBox}>
        <div style={{width: '100%' ,height: '100%', position: 'relative', borderRadius: '100%'}}>
          <Saturation
            {...currentColor}
            onChange={ handleColorChangeSaturation }
            pointer={ MyPointer }
            color={currentColor.hsl}
          />
        </div>
        <EditableInput
            value={ currentHexColor }
            onChange={ handleColorChange }
        />
      </div>
      <div className={classes.colorSettingsContainer} >
        <div style={{padding: '2%', marginLeft: '10%'}}>
          <CirclePicker
            onChangeComplete={ handleColorChange }
            color={currentHexColor}
            colors ={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"]}
            circleSize ={40}
            width={'400px'}
          />
        </div>
        <div style={{padding: '1%'}}>
          <HuePicker
            onChangeComplete={ handleColorChange }
            color={currentHexColor}
          />
          <EditableInput
            value={ currentHexColor }
            onChange={ handleColorChange }
          />
        </div>
      </div>
    </div>
  )
}
