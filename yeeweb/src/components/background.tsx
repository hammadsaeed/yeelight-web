import React, {ReactElement} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    background: '#fff',
  },
  topColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '65%',
    background: '#E57373',
  },
  bottomEllipse: {
    position: 'absolute',
    left: 0,
    top: '45%',
    height: '40%',
    width: '100%',
    background: '#fff',
    borderRadius: '100%',
  }
});

export const Background = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topColor} />
      <div className={classes.bottomEllipse} />
    </div>
  )
}

export default Background;
