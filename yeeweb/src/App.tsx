import React from 'react';
import logo from './logo.svg';
import './App.css';
import button from './stories/1-Button.stories'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button> fsf</button>
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
