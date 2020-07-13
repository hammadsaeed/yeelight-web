import React, {ReactElement, } from 'react';
import { CirclePicker, HuePicker } from 'react-color';
import { colorData } from '../../index.d'
import { EditableInput, Saturation  } from 'react-color/lib/components/common'
import { makeStyles } from '@material-ui/styles';
import { BrightnessPicker } from '../brightnessController';
import { MyPointer } from './pointer'

interface props {
  handleColorChange: any;
  currentHexColor: string;
  currentColor: colorData;
  handleColorChangeSaturation: any;
  currentBrightness: number;
  handleBrightnessChange: any;
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
    fontFamily: '"HelveticaNeue"',
    letterSpacing: 2,
  },
  gridRoot: {
    flexGrow: 1,
  },
  saturationBox: {
    position: 'absolute',
    width: '45%',
    height: '75%',
    textAlign: 'center',
    top: '5%',
    left: '5%',
  },
  compHeading: {
    lineHeight: '0.5vw',
    fontWeight: 500,
    color: '#444444',
  },
  colorSettingsContainer: {
    left: '55%',
    position: 'relative',
  },
  editableColor: {
    padding: '5%',
  }
});

export const ColorPicker = (props: props): ReactElement => {
  const {
    handleColorChange,
    currentColor,
    currentHexColor,
    handleColorChangeSaturation,
    currentBrightness,
    handleBrightnessChange,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.saturationBox}>
        <h2 className={classes.compHeading}> ColorPicker </h2>
        <div style={{width: '100%' ,height: '80%', position: 'relative', borderRadius: '50%'}}>
          <Saturation
            {...currentColor}
            onChange={ handleColorChangeSaturation }
            pointer={ MyPointer }
            color={currentColor.hsl}
          />
        </div>
        <div className={classes.editableColor}>
          <EditableInput
            label="hex"
            value={ currentHexColor }
            onChange={ handleColorChange }
          />
        </div>
      </div>
      <div className={classes.colorSettingsContainer} >
        <div style={{padding: '2%'}}>
          <h2 className={classes.compHeading}> PALETTE </h2>
          <CirclePicker
            onChangeComplete={ handleColorChange }
            color={currentHexColor}
            colors ={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"]}
            circleSize ={48}
            width={'500px'}
          />
        </div>
        <div style={{padding: '2%'}}>
          <h2 className={classes.compHeading}> GRADIENT </h2>
          <HuePicker
            onChangeComplete={ handleColorChange }
            color={currentHexColor}
          />
        </div>
        <div style={{padding: '2%'}}>
          <h2 className={classes.compHeading}> BRIGHTNESS </h2>
          <BrightnessPicker
            currentBrightness={currentBrightness}
            handleBrightnessChange={handleBrightnessChange}
          />
        </div>
      </div>
    </div>
  )
}


