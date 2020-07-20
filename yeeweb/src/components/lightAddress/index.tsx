import React, {ReactElement} from 'react';
import { LightData } from '../../index.d'
import { ClosedOption } from '../closedOption';
import { OpenOption } from './openOption';

interface IncomingProps {
  setOpenState: any,
  openState: boolean,
  lightDataState: LightData[],
  setLightDataState: Function,
}

export const IpAddress = (props: IncomingProps): ReactElement => {
  const { setOpenState, openState, lightDataState, setLightDataState} = props;
  const handleOnClick = () => {
    setOpenState(!openState)
  }

  if(openState) {
    return(
      <OpenOption
        handleOnClick={handleOnClick}
        openState={openState}
        setLightDataState={setLightDataState}
        lightDataState={lightDataState}
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
