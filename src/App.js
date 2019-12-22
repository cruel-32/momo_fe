import React from 'react';
import { BrowserRouter, Route, } from "react-router-dom";
import { useSelector } from 'react-redux'
import { MainPage } from 'pages/MainPage/MainPage.js'
import { LandingPage } from 'pages/LandingPage/LandingPage.js'

import 'styles/app.scss'

const App = ()=>{
  const account = useSelector(store => store.account, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/landing-page' component={LandingPage}/>
        <Route exact path='/'>
          {account.email ?  <MainPage /> : <LandingPage />}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
