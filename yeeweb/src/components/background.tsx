import React, {ReactElement, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'fixed',
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
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 700) {
      setIsWindowSmall(true);
    }
  },[])

  const handleResizeEvent = () => {
    if(window.innerWidth < 700) {
      setIsWindowSmall(true);
    }
    if(window.innerWidth >= 700) {
      setIsWindowSmall(false);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeEvent, false);

    return (): void => {
      window.removeEventListener('resize', handleResizeEvent, false);
    };
  });

  return (
    <div className={classes.root} style={{ background: `${isWindowSmall ? '#E57373' : '#fff'}`}}>
      {!isWindowSmall &&
        <>
          <div className={classes.topColor} />
          <div className={classes.bottomEllipse} />
        </>
      }
    </div>
  )
}

export default Background;
