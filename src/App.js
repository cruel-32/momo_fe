import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import LoginPage from 'containers/login'
import AccountDetail from 'containers/accountDetail'
import AccountList from 'containers/accountList'
import { Button } from '@material-ui/core';

import { TinySwiper } from 'tiny-swiper-react'

import 'styles/App.scss';
import img1 from 'images/1.png';
import img2 from 'images/2.png';
import img3 from 'images/3.png';



function App() {
  const [mode, setMode] = useState('on');

  const [ items ] = useState([
    <img src={img1} className="App-logo" alt="logo" />,
    <img src={img2} className="App-logo" alt="logo" />,
    <img src={img3} className="App-logo" alt="logo" />,
    <div>jsx 1</div>,
    <div>jsx 2</div>,
    <div>jsx 3</div>,
  ])

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <TinySwiper
            items={items}
            useIndicator={true}
            useDirector={true}
            indicatorClass={"override"}
            directorLeftClass={"override"}
            directorRightClass={"override"}
          >
          </TinySwiper>
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
        
      </div>
    </BrowserRouter>
  );
}

export default App;
