import React, {ReactElement, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { ClosedOption } from '../closedOption';
import { OpenOption } from './openOption';

import { TransitionGroup } from 'react-transition-group';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '50%',
    height: '40%',
    top: 0,
    left: '2%',
  },
});

export const IpAddress = (props: {setOpenState: any, openState: boolean}): ReactElement => {
  const classes = useStyles();
  const { setOpenState, openState} = props;
  // const [openState, setOpenState] = useState(false);
  const handleOnClick = () => {
    setOpenState(!openState)
  }

  if(openState) {
    return(
      <OpenOption
        handleOnClick={handleOnClick}
        openState={openState}
      />
    )
  }

  return (
    <ClosedOption
      handleOnClick={handleOnClick}
    />
  )
}

export default IpAddress;
