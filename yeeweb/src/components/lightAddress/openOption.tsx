import React, {ReactElement,useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { LightData } from '../../index.d'
import { Slide, ListItem, ListItemIcon, Checkbox,Button, ListItemText, ListItemSecondaryAction,FormControl,TextField,AccordionDetails,AccordionSummary,Accordion, Typography,Radio,FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: '20%',
    // height: '50%',
    width: '20%',
    borderBottomRightRadius: '10%',
    borderTopRightRadius: '10%',
    backgroundColor: '#fefefe',
    border: '3px solid #e57373',
    opacity: 1,
  },
  mainContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(34, 34, 36,0.9)',
  },
  innerContainer: {
    width:'100%',
    height: '100%',
    backgroundColor: 'white'
  },
  openIcon: {
    position: 'absolute',
    right: '3%',
    top: '0',
    fontSize: 30,
    userSelect: 'none',
    transform: 'rotate(90deg)',
  },
  closeIcon: {
    position: 'absolute',
    right: '3%',
    top: '1%',
    fontSize: 50,
    userSelect: 'none',
    transform: 'rotate(90deg)',
  },
  listContainer: {
    position: 'relative',
    paddingLeft: 0,
    paddingTop: 0,
    padding: '10%',
    width: '100%',
    top: '0%',
  },
  title: {
    margin: '5%',
    marginLeft: '1%',
    fontFamily: '"HelveticaNeue"'

  },
  closeButton: {
    textAlign: 'end',
    padding: '5%',
    paddingBottom: 0,
  },
  buttonClose: {
    color: 'white',
    backgroundColor:'#e57373',
  },
});


const IconPlace = (iconProps: {handlePanelChange: Function, index: number, isExpanded: number}) => {
  const classes = useStyles();
  const {handlePanelChange, index, isExpanded} = iconProps;
  return (
    <span role="img" aria-label="pointer" className={classes.openIcon}>
      >
    </span>
  )
}


const CloseIcon = () => {
  const classes = useStyles();
  return (
    <span role="img" aria-label="pointer" className={classes.closeIcon} >
      X
    </span>
  )
}

interface IncomingProps {
  handleOnClick: any,
  openState: boolean,
  lightDataState: LightData[],
  setLightDataState: Function,
}

export const OpenOption = (props: IncomingProps): ReactElement => {
  const classes = useStyles();
  const  [currentState, setCurrentState ] = useState(false)
  const [isExpanded, setIsExpanded] = useState(0);
  const { handleOnClick, openState, lightDataState, setLightDataState } = props;
  const [ isClosed, setIsClosing ] = useState(true);
  const [ ipChange, setIpChange ] = useState('');
  const [ lightNameChange, setLightNameChange ] = useState('');

  const delayOnClick = () => {
    setIsClosing(false)
    setTimeout(()=> {
      handleOnClick()
    },620)
  }
  // const handleRadioOnClick = () => {
  //   setCurrentState(!currentState)
  // }

  const handlePanelChange = (panelNumber: number) => {
    setIsExpanded(panelNumber)
  };

  const handleIPChange = (event: any) => {
    setIpChange(event.target.value);
  }

  const handleLightNameChange = (event: any) => {
    setLightNameChange(event.target.value);
  }

  const handleRadioClick = (index: number) => {
    const oldIpData = lightDataState;
    for (let i=0; i< oldIpData.length; i++) {
      if(oldIpData[i].lightSelected) {
        oldIpData[i].lightSelected = false;
      }
      if(i === index) oldIpData[i].lightSelected = true;
    }
    setLightDataState(oldIpData)
  }

  const handleChangeOnSubmit = (index: number) => {
    const oldIpData = lightDataState;
    if(lightNameChange !== '') oldIpData[index].Name = lightNameChange;
    if(ipChange !== '') oldIpData[index].IpAddress = ipChange;
    setLightDataState(oldIpData)
    setIsExpanded(0)
  }


  return (
    <div className={classes.mainContainer}>
      <Slide direction="right" in={isClosed} mountOnEnter unmountOnExit timeout={600}>
        <div className={classes.root}  >
          <Typography variant="h3" className={classes.title}>
            Lights
          </Typography>
      <div className={classes.listContainer}>
        {lightDataState.map((light: LightData, i: number) => {
          return(
            <Accordion expanded={isExpanded === i+1} onChange={() => handlePanelChange(i+1)}>
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                expandIcon={
                  <IconPlace
                    handlePanelChange={handlePanelChange}
                    index={i}
                    isExpanded={isExpanded}
                  />
                }
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control=
                    {
                      <Radio
                        checked={light.lightSelected}
                        onClick={() => handleRadioClick(i)}
                      />
                    }
                  label={light.Name}
                />
              </AccordionSummary>
              <AccordionDetails>
                <FormControl style={{ width: '100%', marginTop: '-10%' }}>
                  <TextField
                    id="standard-full-width"
                    label={`Name: ${light.Name}`}
                    style={{ margin: 2, width: '100%' }}
                    fullWidth
                    margin="normal"
                    onChange={handleLightNameChange}
                  />
                  <TextField
                    id="standard-full-width"
                    label={`IP-Address: ${light.IpAddress}`}
                    onChange={handleIPChange}
                    style={{ margin: 2 }}
                    fullWidth
                    margin="normal"
                  />
                  <div className={classes.closeButton}>
                    <Button variant="contained" size="medium" className={classes.buttonClose} color="inherit" onClick={() => handleChangeOnSubmit(i)}>
                      Done
                    </Button>
                  </div>
                </FormControl>
              </AccordionDetails>
          </Accordion>
          )
        })}
        <div className={classes.closeButton}>
          <Button variant="contained" size="medium" className={classes.buttonClose} color="inherit" onClick={delayOnClick}>
            Done
          </Button>
        </div>
    </div>


        </div>
      </Slide>
    </div>
  )
}
export default OpenOption;

{/* <div className={classes.listContainer}>
            <ListItem key={1} role={undefined} dense button onClick={handleOnClick}>
              <ListItemIcon>
                <Radio
                  edge="start"
                  checked={currentState}
                  onClick={handleRadioOnClick}
                  // tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': 'label' }}
                />
              </ListItemIcon>
              <ListItemText id={'label'} primary={`Line item 1`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={handleOnClick}>
                  ✖️
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div> */}
