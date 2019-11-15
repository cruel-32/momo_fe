import { handleActions } from 'redux-actions'
import { LOGOUT, INPUT_ACCOUNT, LOGIN_SUCCESS, LOGIN_FAILURE } from 'store/actions/account'

const initialState = {
    email: 'test@gmail.com',
    password: '',
    username: 'tester',
    authentication: 'N',
    birth: new Date(),
    thumbnail: '',
    name: '',
    phone: '',
    deleted: 'N',
    owns: [],
    managements: [],
    togethers: [],
    message: '',
};

//리듀더. 순수함수. state를 변경하는 것이 아니라 새로운 state를 만들어낸다.
export default handleActions({
    [LOGOUT]:(state)=>({
        ...state    
    }),
    [INPUT_ACCOUNT]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
    [LOGIN_SUCCESS]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
    [LOGIN_FAILURE]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
}, initialState)
