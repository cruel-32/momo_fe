import React, { useState,  } from 'react'
import { useDispatch, } from 'react-redux'

import { SideMenu } from 'components/SideMenu/SideMenu.js'
import { Button, SwipeableDrawer } from '@material-ui/core'
import { LOGOUT_ASYNC } from 'store/actions/account'

import { useHistory } from 'react-router-dom'


export const MainPage = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [sideState, setSideState] = useState({
        left: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setSideState({ ...sideState, [side]: open })
    }

    const logout = e => {
        dispatch({ type: LOGOUT_ASYNC })
    }

    const goSubPage = e => {
        history.push('/sub-page')
    }

    return (
        <div>
            <Button onClick={logout}>Login Out</Button>
            <Button onClick={goSubPage}>goSubPage</Button>

            <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <SwipeableDrawer
                anchor="left"
                open={sideState.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                <SideMenu></SideMenu>
            </SwipeableDrawer>


        </div>
    )
}