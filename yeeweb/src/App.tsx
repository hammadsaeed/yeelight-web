import React from 'react';
import logo from './logo.svg';
import './App.css';
import button from './stories/1-Button.stories'
import { changeColorReq, changeLight } from './components/requests'
const url = 'http://localhost:8000'

const sendRequest = (incomingReq: string) => {
  // const sendReq = changeColorReq(incomingReq);
  // console.log(sendReq);
  changeLight(`${url}/changeLight`, { incomingReq })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
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
        <button onClick={() => sendRequest('Changing Color')} > fsf</button>
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
