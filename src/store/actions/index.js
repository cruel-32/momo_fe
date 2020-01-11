import { all } from 'redux-saga/effects';
import accountSaga from './account'
import togetherSaga from './together'

export default function* rootSaga() {
    yield all([
        accountSaga(),
        togetherSaga(),
    ])
}
