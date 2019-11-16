import { handleActions } from 'redux-actions'
import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from 'store/actions/account'

const initialState = JSON.parse(localStorage.getItem('account')) || {
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
};

//리듀더. 순수함수. state를 변경하는 것이 아니라 새로운 state를 만들어낸다.
export default handleActions({
    [LOGOUT]:(state)=>({
        ...state    
    }),
    [LOGIN_SUCCESS]:(state, action)=>({
        ...state,
        ...action.payload,
    }),
    [LOGIN_FAILURE]:(state, action)=>({
        ...state,
        ...action.payload,
    }),
}, initialState)
