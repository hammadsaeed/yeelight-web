import React, {ReactElement} from 'react';
import { FlowColor } from '../index.d'
import { CircleButton } from './colorButton';
import {  Grid, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface IncomingProps {
  togglePowerState: any,
  powerStatus: boolean,
  colorFlow: FlowColor[],
  handleFlowColorChange: any,
}

const useStyles = makeStyles({
  buttonContainer: {
    position: 'fixed',
    height: '17%',
    minHeight: '120px',
    bottom: '4vw',
    left: '6.5%',
    background: '#FEFEFE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    padding: '1%',
    border: '3px solid #e57373',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      bottom: '0',
      padding: '2%',
      left: '5vw',
      borderRadius: '30px',
      border: '1px solid #e57373',
      minWidth: '380px',
    }
  },
  itemContainer: {
    padding: '2%',
    width: '40vh',
    display: 'flex',
    alignItems: 'center',
  },
  compHeading: {
    marginLeft: '1%',
    lineHeight: '0.5vw',
    fontWeight: 500,
    flex: 1,
    color: '#444444',
  },
  flowButton: {
    transform: 'translate(10%)',
  },
  flowContainer: {
    display: 'flex',
  }
});


export const LightControl = (props: IncomingProps): ReactElement => {
  const {
    powerStatus,
    togglePowerState,
    colorFlow,
    handleFlowColorChange,
  } = props

  const classes = useStyles();

  return (
      <div >
        <Grid item xs={12} className={classes.buttonContainer}>
          <Grid container spacing={1} direction='column' >
            <Grid item xs={12} className={classes.itemContainer}>
                <h1 className={classes.compHeading}> Power </h1>
                <div>
                  <Switch
                    checked={powerStatus}
                    onChange={togglePowerState}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </div>
            </Grid>
            <Grid item className={classes.flowContainer} style={{height: '50px'}}>
              <h1 className={classes.compHeading} > Flow </h1>
                <Grid container spacing={1} direction='row' className={classes.flowButton} style={{height: 'fit-content'}}>
                  {colorFlow.map((x: FlowColor, i: number) => {
                      return (
                        <Grid item key={`flowId: ${i}`} style={{height: 'fit-content'}}>
                          <CircleButton
                            colorFlow={x}
                            handleFlowColorChange={handleFlowColorChange}
                          />
                        </Grid>
                      )
                    })}
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
  )
}

export default LightControl;
