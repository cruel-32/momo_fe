import { handleActions } from 'redux-actions'
import { SET_MY_TOGETHERS } from 'store/types/together'
import produce from 'immer'

const initialState = {
    myTogethers : [],

}

export default handleActions({
    [SET_MY_TOGETHERS]: (state, action) =>
        produce(state, draft => {
            const { target, data } = action.payload
            draft[target] = data
        }),

        
}, initialState)
