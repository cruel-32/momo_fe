// import {createAction } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// 액션 타입 정의
export const LOGIN = 'account/LOGIN';
export const LOGOUT = 'account/LOGOUT';

export const LOGIN_SUCCESS = 'account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'account/LOGIN_FAILURE';

//비동기 미들웨어 처리. 액션이 호출되면 리듀서까지 도달하기 전 해당 함수를 먼저 거쳐간다.
function* loginAsync(action) {
    try {
        const { data } = yield axios.post(`http://localhost:12354/api/accounts/auth`, action.payload);

        localStorage.setItem('account', JSON.stringify(data));

        yield put({ type: LOGIN_SUCCESS, payload: data });
    } catch (e) {
        console.log('LOGIN_FAILURE e : ', e);
        yield put({ type: LOGIN_FAILURE, payload: e });
    }

}
function* logoutAsync(action) {
    try {
        yield axios.delete(`http://localhost:12354/api/accounts/auth`);
        
        localStorage.setItem('account', null);

        const payload = {
            email: null,
            username: null,
            authentication: null,
            birth: null,
            thumbnail: null,
            name: null,
            phone: null,
            deleted: null,
            owns: null,
            managements: null,
            togethers: null,
            message: null,
            _id: null,
        }

        yield put({ type: LOGIN_SUCCESS, payload});
    } catch (e) {
        console.log('LOGIN_FAILURE e : ', e);
        yield put({ type: LOGIN_FAILURE, payload: e });
    }
}

export default function* accountSaga() {
    yield takeEvery(LOGIN, loginAsync);
    yield takeEvery(LOGOUT, logoutAsync);
}
