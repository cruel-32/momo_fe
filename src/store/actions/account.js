// import {createAction } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as accountTypes from 'store/types/account'

//비동기 미들웨어 처리. 액션이 호출되면 리듀서까지 도달하기 전 해당 함수를 먼저 거쳐간다.
function* loginAsync(action) {
    try {
        const { data } = yield axios.post(`/api/accounts/auth`, action.payload);

        localStorage.setItem('account', JSON.stringify(data));

        yield put({ type: accountTypes.SET_ACCOUNT, payload: data });
    } catch (e) {
        localStorage.removeItem('account')
        yield put({ type: accountTypes.RESET_ACCOUNT });
    }

}

function* logoutAsync(action) {
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
        createdAt:null,
        updatedAt:null,
    }
    
    try {
        const { data, error } = yield axios.delete(`/api/accounts/auth`);
        
        if(data){
            localStorage.removeItem('account')
            yield put({ type: accountTypes.RESET_ACCOUNT, payload});
        } else {
            throw error            
        }
    } catch (e) {
        console.error('로그아웃 실패 : ', e)
    }
}

function* getAccounts(){
    try {
        const { data, error } = yield axios.get(`/api/accounts`);
        
        if(data){
            yield put({ type: accountTypes.SET_ACCOUNTS, payload: data });
        } else {
            throw error            
        }
    } catch (e) {
        console.error('목록 불러오기 : ', e)
    }
}

function* getAccountDetail(action){
    console.log('getAccountDetail action : ', action)
    try {
        const { data, error } = yield axios.get(`/api/accounts/${action.payload._id}`);
        
        if(data){
            yield put({ type: accountTypes.SET_ACCOUNT, payload: data });
        } else {
            throw error            
        }
    } catch (e) {
        console.error('목록 불러오기 : ', e)
    }
}

function* postProfile(action){
    console.log('postProfile action : ', action)
    const { _id, formData } = action.payload
    try {
        const { data, error } = yield axios.post(`/api/accounts/${_id}/profile`, formData, {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        });
        
        if(data){
            console.log('postProfile data : ', data)
            yield put({ type: accountTypes.UPDATE_PROFILE, payload: {
                thumbnail:data,
                _id
            }});
        } else {
            throw error            
        }
    } catch (e) {
        console.error('목록 불러오기 : ', e)
    }
}


function* updateProfile(action){
    console.log("TCL: function*updateProfile -> action", action)
    try {
        const { _id, thumbnail } = action.payload
        const { data, error } = yield axios.patch(`/api/accounts/${_id}`, {
            thumbnail
        })
        
        if(data){
            yield put({ type: accountTypes.SET_ACCOUNTS, payload: data });
        } else {
            throw error            
        }
    } catch (e) {
        console.error('목록 불러오기 : ', e)
    }
}


export default function* accountSaga() {
    console.log('accountSaga : ')
    yield takeEvery(accountTypes.GET_ACCOUNT_DETAIL_ASYNC, getAccountDetail);
    yield takeEvery(accountTypes.LOGIN_ASYNC, loginAsync);
    yield takeEvery(accountTypes.LOGOUT_ASYNC, logoutAsync);
    yield takeEvery(accountTypes.GET_ACCOUNTS, getAccounts);
    yield takeEvery(accountTypes.UPLOAD_PROFILE, postProfile);
    yield takeEvery(accountTypes.UPDATE_PROFILE, updateProfile);
}
