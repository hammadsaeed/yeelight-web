import React, {ReactElement} from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface props {
  currentBrightness: number;
  handleBrightnessChange: any;
}
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export const BrightnessPicker = (props: props): ReactElement => {
  const { currentBrightness, handleBrightnessChange } = props;
  const classes = useStyles();

  const valuetext = () => {
    console.log()
    return `${currentBrightness}C`;
  }

  return (
    <div className={classes.root} style={{padding: '1%'}}>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        onChange={handleBrightnessChange}
        aria-labelledby="continuous-slider"
        step={10}
      />
    </div>
  )
}

export default BrightnessPicker;
