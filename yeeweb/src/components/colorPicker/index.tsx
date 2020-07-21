import React, {ReactElement, } from 'react';
import { CirclePicker, HuePicker } from 'react-color';
import { colorData } from '../../index.d'
import { EditableInput, Saturation  } from 'react-color/lib/components/common'
import { Grid } from '@material-ui/core';
import { toMonochromatic } from '../../lib/getColor';
import { makeStyles } from '@material-ui/styles';
import { BrightnessPicker } from './brightnessController';
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
    left: '5vw',
    background: '#FEFEFE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    fontFamily: '"HelveticaNeue"',
    letterSpacing: 2,
    border: '3px solid #e57373',
    padding: '4%',
    paddingBottom: '8%',
  },
  compHeading: {
    lineHeight: '0.5vw',
    fontWeight: 500,
    color: '#444444',
  },
  colorHeading: {
    lineHeight: '0.5vw',
    fontWeight: 500,
    textAlign: 'center',
    color: '#444444',
  },
  editableColor: {
    padding: '2%',
    textAlign: 'center',
  }
});

const scaling = {
  width:  window.innerWidth > 700 ? '350px': '250px',
};

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
    <div >
      <Grid container xs={11} lg={8} justify="center" spacing={2} className={classes.root}>
          <Grid item xs={6} lg={6} style={{height: '18vw', width: '20vw',marginTop: '-2%', minHeight: '280px', minWidth: '300px'}}>
            <h1 className={classes.colorHeading}> ColorPicker </h1>
            <div style={{width: '100%' ,height: '90%', minHeight: '200px',position: 'relative', borderRadius: '50%'}}>
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
          </Grid>
          <Grid item xs={6} lg={4} style={{ minHeight: '250px', marginTop: '6%', minWidth: '300px'}}>
              <div style={{padding: '2%'}}>
                <h2 className={classes.compHeading}> PALETTE </h2>
                <CirclePicker
                  onChangeComplete={ handleColorChange }
                  color={currentHexColor}
                  colors ={toMonochromatic(currentHexColor)}
                  circleSize ={36}
                  width={scaling.width}
                />
              </div>
              <div style={{padding: '2%'}}>
                <h2 className={classes.compHeading}> GRADIENT </h2>
                <HuePicker
                  onChangeComplete={ handleColorChange }
                  color={currentHexColor}
                  width={'250px'}
                />
              </div>
              <div style={{padding: '2%'}}>
                <h2 className={classes.compHeading}> BRIGHTNESS </h2>
                <BrightnessPicker
                  currentBrightness={currentBrightness}
                  handleBrightnessChange={handleBrightnessChange}
                />
              </div>
          </Grid>
        </Grid>
    </div>
  )
}


export default ColorPicker;

//  <h2 className={classes.compHeading}> ColorPicker </h2>
//         <div style={{width: '100%' ,height: '80%', position: 'relative', borderRadius: '50%'}}>
//           <Saturation
//             {...currentColor}
//             onChange={ handleColorChangeSaturation }
//             pointer={ MyPointer }
//             color={currentColor.hsl}
//           />
//         </div>
//         <div className={classes.editableColor}>
//           <EditableInput
//             label="hex"
//             value={ currentHexColor }
//             onChange={ handleColorChange }
//           />
//         </div>
//       </div>

// ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"]
