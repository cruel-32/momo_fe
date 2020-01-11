import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'store/reducers'
import rootSaga from 'store/actions'

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'styles/normalize.scss';
import 'styles/material-custom.scss';

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:12354' //'https://momoapps.herokuapp.com/'
axios.defaults.headers.common['Authorization'] = 'momo-actions';
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //, application/x-www-form-urlencoded
// axios.defaults.headers.put['Content-Type'] = 'application/json';
// axios.defaults.headers.patch['Content-Type'] = 'application/json';
// axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
