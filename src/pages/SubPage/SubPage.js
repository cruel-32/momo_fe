import React from 'react'
import { useDispatch, } from 'react-redux'

import { Button, } from '@material-ui/core'
import { LOGOUT_ASYNC } from 'store/actions/account'

import { useHistory } from 'react-router-dom'


export const SubPage = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = e => {
        dispatch({ type: LOGOUT_ASYNC })
    }

    const goMainPage = e => {
        history.push('/')
    }

    return (
        <div>
            <Button onClick={logout}>Login Out</Button>
            <Button onClick={goMainPage}>goMainPage</Button>
        </div>
    )
}