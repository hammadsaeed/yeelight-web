import React, {useState, useEffect, useRef} from 'react';
import { toDecimal, decimalColorToHTMLcolor } from './lib/getColor';
import { Container } from '@material-ui/core';
import useStateWithLocalStorage from './lib/localStorage';
import { sendComand } from './components/requests';
import { ColorController } from './components/colorController'
import { Heading } from './components/heading'
import { Background } from './components/background'
import { makeStyles } from '@material-ui/styles';
import { ThreeModel } from './components/model/3dModel'
import { IpAddress } from './components/lightAddress/.'
import './App.css'
const url = 'http://localhost:8000'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    fontFamily: '"HelveticaNeue"'
  },
  lampModel: {
    position: 'absolute',
    zIndex: 0,
  }
});


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

const initialFlowColor = [
  {
    color: toDecimal('#2c9c49')
  },
  {
    color: toDecimal('#00FFE6')
  },
  {
    color: toDecimal('#ffff')
  },
  {
    color: toDecimal('#000')
  },
]


function App() {
  const [currentColor, setCurrentColor] = useState(toDecimal('5844012'));
  const [colorFlow, setColorFlow] = useState(initialFlowColor)
  const [currentHexColor, setCurrentHexColor] = useState('#00FFE6');
  const [currentBrightness, setCurrentBrightness] = useState<number>(30);
  const [powerStatus, setCurrentPowerStatus] = useState(false);
  const [openState, setOpenState] = useState(false);
  const getInitialData = useRef(false);

  const [ lightIPData, setLightIPData] = useStateWithLocalStorage('lightData');
  const [ lightDataState, setLightDataState ] = useState();
  const [currentIP, setCurrentIP] = useState('')

  const setIPAddress = (newIpSettings: any) => {
    newIpSettings.forEach((lightDetails: any) => {
      if(lightDetails.lightSelected) {
        setCurrentIP(lightDetails.IpAddress)
      }
    })
  }


  useEffect(() => {
    if(lightIPData === '') {
      setLightIPData(JSON.stringify(LightData));
      setLightDataState(LightData)
    }
    if(lightIPData) {
      setLightDataState(JSON.parse(lightIPData))
      setIPAddress(JSON.parse(lightIPData))
    }
  }, [lightIPData, setLightIPData]);

  const handleIpConfigChange = (newIpSettings: any) => {
    setLightDataState(newIpSettings);
    setLightIPData(JSON.stringify(newIpSettings))
  }

  const handleFlowColorChange = (oldColor: any, newColor: any) => {
    colorFlow.forEach((currentColor: any, i: number) => {
      if(currentColor.color.hex === oldColor.hex) {
        const newColorSet = colorFlow;
        newColorSet[i].color = newColor;
        setColorFlow(newColorSet)
      }
    })
  }


  const handleColorChange = (color: any) => {
    setCurrentColor(color);
    setCurrentHexColor(color.hex);
    const { rgb } = color
    sendComand(`${url}/changeLight`, {rgb: rgb, ipAddress: currentIP});
  }

  const togglePowerState = () => {
    const newStatus = !powerStatus
    const status = sendComand(`${url}/setPower`, {powerStatus: newStatus, ipAddress: currentIP});
    setCurrentPowerStatus(newStatus)
    console.log(status)
  }

  const handleBrightnessChange = (event : any, currentBrightnessSlide: number) => {
    setCurrentBrightness(currentBrightnessSlide)
    const status = sendComand(`${url}/setBrightness`, {currentBrightnessSlide, ipAddress: currentIP} );
    console.log(status)
  }
  const handleColorChangeSaturation = (color: any) => {
    const newColor = toDecimal(color);
    setCurrentColor(newColor)
    setCurrentHexColor(newColor.hex)
    const { rgb } = newColor
    sendComand(`${url}/changeLight`, {rgb: rgb, ipAddress: currentIP});
  }
   useEffect(() => {
    if(!getInitialData.current && currentIP !== '') {
      sendComand(`${url}/getStatus`, {parms: ['power','bright',"rgb",'ct' ], ipAddress: currentIP}).then(result => {
        console.log(result);
        if(result === undefined) throw new Error('No Resut Found');
        if(result[1]) setCurrentBrightness(parseInt(result[1]))
        if(result[0] === 'on') setCurrentPowerStatus(true);
        if(result[0] === 'off') setCurrentPowerStatus(false);
        if(result[2]) {
          const getColor = decimalColorToHTMLcolor(result[2]);
          setCurrentColor(getColor);
          setCurrentHexColor(getColor.hex)
        }
        getInitialData.current = true;
      })
    }
  })

  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Background/>
              <div className={classes.lampModel}>
                <ThreeModel
                  currentHexColor={currentHexColor}
                  currentBrightness={currentBrightness}
                />
              </div>
              <Heading />
          {/* <Slide direction="left" in={!openState} mountOnEnter unmountOnExit timeout={600}> */}
            <Container style={{ position: 'fixed',left: `${!openState ? '2%': '15vw'}`,top: '12vw', transition: 'left 300ms'}}>
              <ColorController
                handleColorChange={handleColorChange}
                handleColorChangeSaturation={handleColorChangeSaturation}
                currentHexColor={currentHexColor}
                currentColor={currentColor}
                handleBrightnessChange={handleBrightnessChange}
                currentBrightness={currentBrightness}
                powerStatus={powerStatus}
                togglePowerState={togglePowerState}
                colorFlow={colorFlow}
                handleFlowColorChange={handleFlowColorChange}
              />
            </Container>
          {/* </Slide> */}
        <IpAddress
          setOpenState={setOpenState}
          openState={openState}
          lightDataState={lightDataState}
          setLightDataState={handleIpConfigChange}
        />
      </div>
  );
}

export default App;
