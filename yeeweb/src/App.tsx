import React from 'react';
import logo from './logo.svg';
import { ColorController } from './components/colorController'
import { Heading } from './components/heading'
import { Background } from './components/background'
import { makeStyles } from '@material-ui/styles';
import './App.css'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    fontFamily: '"HelveticaNeue"'
  },
});

function App() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Background/>

        <Heading />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ColorController />
      </div>
  );
}

export default App;
