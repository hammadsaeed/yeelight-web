import React, {ReactElement} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '50%',
    height: '40%',
    top: 0,
    left: '2%',
  },
  heading: {
    fontSize: '10vw',
    position: 'relative',
    margin: 0,
    top: '1vw',
    left: '10%',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '10vw',
    letterSpacing: '10px',
    color: '#FFFFFF',
  }
});

export const Heading = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}> YeeWeb </h1>
    </div>
  )
}

export default Heading;
