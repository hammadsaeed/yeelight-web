import React, {ReactElement, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
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
    transform: 'rotate(90deg)',
    userSelect: 'none',
    color: '#E57373',
  }
});

export const ClosedOption = (props: {handleOnClick: any}): ReactElement => {
  const classes = useStyles();
  const { handleOnClick } = props;
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
    <div className={classes.root} onClick={handleOnClick} >
      <span role="img" aria-label="pointer" className={classes.arrow} style={{ fontSize: `${isWindowSmall ? '3.5vh' : '7vh'}`}}>
        🡡
      </span>
    </div>
  )
}
export default ClosedOption;
