// import {createAction } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as togetherTypes from 'store/types/together'

function* getTogethers(action) {
    try {
        const { target, params } = action.payload;
        const { data } = yield axios.get(`/api/togethers`, { params });

        // _ids: Array(0)

        console.log('target : ', target)
        console.log('params : ', params)
        console.log('data : ', data)

        yield put({ type: togetherTypes.SET_MY_TOGETHERS, payload: {
            target,
            data,
        }});
    } catch (e) {
        localStorage.removeItem('together')
        yield put({ type: togetherTypes.SET_MY_TOGETHERS, payload: [] });
    }

}

export default function* togetherSaga() {
    console.log('togetherSaga : ')
    yield takeEvery(togetherTypes.GET_TOGETHERS_ASYNC, getTogethers);
}
