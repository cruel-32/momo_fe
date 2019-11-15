// import {createAction } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// 액션 타입 정의
export const LOGIN = 'account/LOGIN';
export const LOGOUT = 'account/LOGOUT';
export const INPUT_ACCOUNT = 'account/INPUT_ACCOUNT';

export const LOGIN_SUCCESS = 'account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'account/LOGIN_FAILURE';

//비동기 미들웨어 처리. 액션이 호출되면 리듀서까지 도달하기 전 해당 함수를 먼저 거쳐간다.
function* loginAsync(action) {
    try {
        const { data } = yield axios.get(`http://localhost:12354/api/accounts`);
        console.log('LOGIN_SUCCESS action : ', action);
        console.log('data : ', data);
        yield put({ type: LOGIN_SUCCESS, payload: action.payload });
    } catch (e) {
        console.log('LOGIN_FAILURE e : ', e);
        yield put({ type: LOGIN_FAILURE, payload: e });
    }
}

export default function* accountSaga() {
    yield takeEvery(LOGIN, loginAsync);
}
