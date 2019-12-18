import axios from 'axios'
import { all } from 'redux-saga/effects';
import accountSaga from './account'

axios.defaults.baseURL = 'http://localhost:12354' //'https://momoapps.herokuapp.com/'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function* rootSaga() {
    yield all([accountSaga()]);
}
