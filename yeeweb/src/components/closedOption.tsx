import React, {ReactElement} from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: -1,
    top: '20%',
    height: '10%',
    minWidth: '70px',
    width: '5%',
    borderTopLeftRadius: '120%',
    borderTopRightRadius: '120%',
    backgroundColor: '#fefefe',
    transform: 'rotate(90deg)',
    border: '5px solid #e57373',
    borderBottom: 0,
  },
  arrow: {
    padding: '0.5vw',
    fontSize: '9vh',
    transform: 'rotate(90deg)',
    userSelect: 'none',
    color: '#E57373',
  }
});

export const ClosedOption = (props: {handleOnClick: any}): ReactElement => {
  const classes = useStyles();
  const { handleOnClick } = props;
  return (
    <div className={classes.root} onClick={handleOnClick} >
      <span role="img" aria-label="pointer" className={classes.arrow} >
        🡡
      </span>
    </div>
  )
}
export default ClosedOption;
