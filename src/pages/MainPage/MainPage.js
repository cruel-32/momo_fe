import React, { useState,  } from 'react'
import { SideMenu } from 'components/SideMenu/SideMenu.js'
import { Button, SwipeableDrawer } from '@material-ui/core'

import { SearchForm } from 'components/SearchForm/SearchForm.js'

import btnLocation from 'images/icons/btn_location.svg'
import btnMenu from 'images/icons/btn_menu.svg'


export const MainPage = props => {
    const [sideState, setSideState] = useState({
        left: true,
    })

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setSideState({ ...sideState, [side]: open })
    }

    return (
        <div className="main">
            <div className="main__header">
                <Button onClick={toggleDrawer('left', true)}>
                    <img className="main__btn main__btn--pos-top-left" src={btnMenu} alt="menu" />
                </Button>
                <Button>
                    <img className="main__btn main__btn--pos-top-right  " src={btnLocation} alt="location" />
                </Button>
            </div>

            <div className="main__card main__card--pos-center">
                {/* component start*/}
                <p className="theme-card">
                    한 주를 시작하는 월요일!<br/>무료함을 달래봐요.
                </p>
                {/* component end*/}
            </div>

            <div className="main__search-wrap main__search-wrap--center">
                <SearchForm />
            </div>

            <SwipeableDrawer
                anchor="left"
                open={sideState.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                <SideMenu setSideState={setSideState}></SideMenu>
            </SwipeableDrawer>
        </div>
    )
}