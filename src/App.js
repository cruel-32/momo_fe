import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import LoginPage from 'pages/login'
import AccountDetail from 'pages/accountDetail'
import AccountList from 'pages/accountList'
import { Button } from '@material-ui/core';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { SideAccount } from 'components/SideAccount/SideAccount.js'

const App = ()=>{
  const [mode, setMode] = useState('on');

  const [sideState, setSideState] = useState({
    left: true,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSideState({ ...sideState, [side]: open });
  };



  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">home</Link>&nbsp;&nbsp;
          <Link to={`/account/${'tester'}`}>AccountDetail</Link>&nbsp;&nbsp;
          <Link to="/account?sort=name">list</Link>&nbsp;&nbsp;
        </div>
        <Route exact path='/'>
          <LoginPage source={mode} />
        </Route>
        <Route exact path='/account/:_id'>
          <AccountDetail source={mode}/>
        </Route>
        <Route exact path='/account'>
          <AccountList source={mode}></AccountList>
        </Route>
        <Button className="app__button--on" onClick={()=>{setMode('on')}}>set on</Button>
        <button className="app__button--off" onClick={()=>{setMode('off')}}>set off</button>
        

        
        <Button onClick={toggleDrawer('left', true)}>Open Left</Button>

      </div>

      <SwipeableDrawer
        anchor="left"
        open={sideState.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <SideAccount></SideAccount>
      </SwipeableDrawer>

      
    </BrowserRouter>
  );
}

export default App;
