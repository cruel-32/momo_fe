import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from 'react-redux'
import { MainPage } from 'pages/MainPage/MainPage.js'
import { LandingPage } from 'pages/LandingPage/LandingPage.js'
import { SubPage } from 'pages/SubPage/SubPage.js'

import 'styles/app.scss'

const App = ()=>{
  const account = useSelector(store => store.account, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/landing-page'>
            <LandingPage />
            {/* {account.email ?  <Redirect to="/" /> : <LandingPage />} */}
          </Route>

          <Route exact path='/'>
            {/* {account.email ?  <MainPage /> : <LandingPage />} */}
            {account.email ?  <MainPage /> : <Redirect push to="/landing-page" />}
          </Route>

          <Route exact path='/sub-page'>
            {/* {account.email ?  <SubPage /> : <LandingPage />} */}
            {account.email ?  <SubPage /> : <Redirect push to="/landing-page" />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
