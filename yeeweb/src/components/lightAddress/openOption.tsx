import React, {ReactElement,useState } from 'react';
import { makeStyles } from '@material-ui/styles';
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

interface LightInfo {
  IpAddress: string,
  Name: string,
}

const LightData = [
  {
    IpAddress: '192.168.1.2',
    Name: 'Living Room',
    lightSelected: false,
  },
  {
    IpAddress: '192.168.1.32',
    Name: 'Bed Room',
    lightSelected: false,
  },
  {
    IpAddress: '192.168.1.4',
    Name: 'TV Room',
    lightSelected: false,
  },
]

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


export const OpenOption = (props: {handleOnClick: any, openState: boolean}): ReactElement => {
  const classes = useStyles();
  const  [currentState, setCurrentState ] = useState(false)
  const [isExpanded, setIsExpanded] = useState(0);
  const { handleOnClick, openState } = props;
  const [ isClosed, setIsClosing ] = useState(true);

  const delayOnClick = () => {
    setIsClosing(false)
    setTimeout(()=> {
      handleOnClick()
    },620)
  }
  const handleRadioOnClick = () => {
    setCurrentState(!currentState)
  }

  const handlePanelChange = (panelNumber: number) => {
    console.log(panelNumber)
    setIsExpanded(panelNumber)
  };

  return (
    <div className={classes.mainContainer}>
      <Slide direction="right" in={isClosed} mountOnEnter unmountOnExit timeout={600}>
        <div className={classes.root}  >
          <Typography variant="h3" className={classes.title}>
            Lights
          </Typography>
      <div className={classes.listContainer}>
        {LightData.map((light: LightInfo, i: number) => {
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
                        checked={currentState}
                        onClick={handleRadioOnClick}
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

                  />
                  <TextField
                    id="standard-full-width"
                    label={`IP-Address: ${light.IpAddress}`}
                    style={{ margin: 2 }}
                    fullWidth
                    margin="normal"
                  />
                  <div className={classes.closeButton}>
                    <Button variant="contained" size="medium" className={classes.buttonClose} color="inherit" onClick={() => handlePanelChange(0)}>
                      Done
                    </Button>
                  </div>
                  {/* <Button variant="contained" size="small" className={classes.buttonClose} color="inherit" onClick={handleOnClick}>
                    Done
                  </Button> */}
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
