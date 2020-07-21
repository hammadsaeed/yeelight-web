import React, {useState} from 'react'
import { ChromePicker } from 'react-color'
import { FlowColor } from '../index.d'

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  swatch: {
    background: '#fff',
    border: '1px solid #e57373',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'inline-block',
    cursor: 'pointer',
    width: '5vh',
    height: '5vh',
    borderRadius: '50%',
  },
  colorDisplay: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  popover: {
    position: 'absolute',
    top:'-150%',
    zIndex: 2,
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
});

export const CircleButton = (props: { colorFlow: FlowColor, handleFlowColorChange: any}) => {
  const classes = useStyles();
  const { colorFlow, handleFlowColorChange } = props;
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState(colorFlow.color.hex)

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  };

  const handleClose = () => {
    setDisplayColorPicker(false)
  };

  const handleChange = (color: any) => {
    setColor(color.hex)
    handleFlowColorChange(colorFlow.color, color)
    setDisplayColorPicker(false)
  };

  return (
    <>
      <div className={ classes.swatch } onClick={ handleClick }>
        <div className={ classes.colorDisplay } style={{background: `${color}` }}/>
      </div>
      { displayColorPicker ?
        <div className={ classes.popover }>
          <div className={ classes.cover } onClick={ handleClose }/>
          <ChromePicker color={ color } onChange={ handleChange } />
        </div>
        :
        null
      }

    </>
  )
}

export default CircleButton
