import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";

import 'styles/App.scss';
import LoginPage from 'containers/login'

function App() {
  const [mode, setMode] = useState('on');

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">home</Link>
          <Link to="/sub1">sub1</Link>
          <Link to="/sub2">sub2</Link>
        </div>
        <Route exact path='/'>
          <LoginPage source={mode}></LoginPage>
        </Route>

        <button onClick={()=>{setMode('on')}}>set on</button>
        <button onClick={()=>{setMode('off')}}>set off</button>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
