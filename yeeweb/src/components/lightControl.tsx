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
    height: '15%',
    bottom: '10%',
    left: '7%',
    background: '#FEFEFE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    padding: '2%',
    border: '3px solid #e57373'
  },
  itemContainer: {
    padding: '1%',
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
      <div className={classes.buttonContainer}>
        <Grid item xs={12}>
          <Grid container spacing={4} direction='column'>
            <Grid item className={classes.itemContainer}>
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
            <Grid item className={classes.flowContainer}>
              <h1 className={classes.compHeading}> Flow </h1>
                <Grid container spacing={1} direction='row' className={classes.flowButton}>
                  {colorFlow.map((x: FlowColor, i: number) => {
                      return (
                        <Grid item key={`flowId: ${i}`}>
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
