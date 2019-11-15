import React, { useState } from 'react';
import logo from './logo.svg';
import 'styles/App.scss';
import LoginPage from 'containers/login'

function App() {
  const [mode, setMode] = useState('on');

  return (
    <div className="App">
      <LoginPage source={mode}></LoginPage>

      <button onClick={()=>{setMode('on')}}>set on</button>
      <button onClick={()=>{setMode('off')}}>set off</button>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
