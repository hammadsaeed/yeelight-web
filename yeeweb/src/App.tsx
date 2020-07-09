import React from 'react';
import logo from './logo.svg';
import './App.css';
import button from './stories/1-Button.stories'
import { ColorController } from './components/colorController'
import { changeBrightness, changeLight } from './components/requests'
const url = 'http://localhost:8000'

const sendColorChangeRequest = (incomingReq: string) => {
  changeLight(`${url}/changeLight`, { incomingReq })
  .then(data => {
    console.log(data);
  });
}

const changeBrightnessRequest = (incomingReq: string) => {
  changeBrightness(`${url}/setBrightness`, { incomingReq })
  .then(data => {
    console.log(data);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ColorController />
        <button onClick={() => sendColorChangeRequest('Changing Color')} > Change</button>
        <button onClick={() => changeBrightnessRequest('Discover')} > Discover</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          First commit
        </a>
      </header>
    </div>
  );
}

export default App;
