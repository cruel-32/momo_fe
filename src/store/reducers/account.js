import { handleActions } from 'redux-actions'
import { SET_ACCOUNT, RESET_ACCOUNT, SET_ACCOUNTS } from 'store/actions/account'
import produce from 'immer'

const initailAccount = {
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

const initialState = JSON.parse(localStorage.getItem('account')) || initailAccount

//리듀더. 순수함수. state를 변경하는 것이 아니라 새로운 state를 만들어낸다.
export default handleActions({
    [SET_ACCOUNT]: (state, action) =>
        produce(state, draft => {
            const { payload } = action

            Object.keys(payload).forEach(key => {
                if(!draft[key] !== undefined) {
                    console.log(key, ' : ', payload[key])
                    draft[key] = payload[key] || ''
                }
            })
        }),
    [RESET_ACCOUNT]:()=>(initailAccount),
    [SET_ACCOUNTS]:(state, action)=>({
        ...state,
        ...action.payload
    }),
}, initialState)
