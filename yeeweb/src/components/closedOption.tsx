import React, {ReactElement, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '10vw',
    left: -1,
    height: '5vw',
    width: '4vw',
    minHeight: '40px',
    minWidth: '30px',
    borderTopLeftRadius: '120%',
    borderTopRightRadius: '120%',
    backgroundColor: '#fefefe',
    transform: 'rotate(90deg)',
    border: '3px solid #e57373',
    borderBottom: 0,
  },
  arrow: {
    padding: '0.5vw',
    userSelect: 'none',
    color: '#E57373',
    fontSize: '12vh',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '3vh'
    }
  }
});

export const ClosedOption = (props: {handleOnClick: any}): ReactElement => {
  const classes = useStyles();
  const { handleOnClick } = props;

  return (
    <div className={classes.root} onClick={handleOnClick} >
      <span role="img" aria-label="pointer" className={classes.arrow}>
      ↑
      </span>
    </div>
  )
}
export default ClosedOption;
