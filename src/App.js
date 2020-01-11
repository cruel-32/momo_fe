import React, { useEffect } from 'react'
import { BrowserRouter, Route, } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { MainPage } from 'pages/MainPage/MainPage.js'
import { LandingPage } from 'pages/LandingPage/LandingPage.js'
import { GET_ACCOUNT_DETAIL_ASYNC, } from 'store/types/account'

import 'styles/app.scss'

const App = ()=>{
  const dispatch = useDispatch()
  const account = useSelector(store => store.account, [])

  useEffect(()=>{
    const { _id, togethers } = account
    
    if(_id && !togethers){
      dispatch({ type: GET_ACCOUNT_DETAIL_ASYNC, payload:{_id}})
    }
  }, [ account, dispatch ])

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
