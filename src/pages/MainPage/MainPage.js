import React, { useState,  } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'

import { SideMenu } from 'components/SideMenu/SideMenu.js'
import { SearchForm } from 'components/SearchForm/SearchForm.js'
import { ThemeCard } from 'components/ThemeCard/ThemeCard.js'
import { SwipeableMenu } from 'components/SwipeableMenu/SwipeableMenu.js'

import btnLocation from 'images/icons/btn_location.svg'
import btnMenu from 'images/icons/btn_menu.svg'

import './MainPage.scss'

export const MainPage = props => {
    const [sideState, setSideState] = useState({
        left: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return
        }
        setSideState({ ...sideState, [side]: open })
    }

    return (
        <div className="main">
            <div className="main__header">
                <Button className="main__btn"  onClick={toggleDrawer('left', true)}>
                    <img className="main__icon"  src={btnMenu} alt="menu" />
                </Button>
                <Button className="main__btn" >
                    <img className="main__icon"  src={btnLocation} alt="location" />
                </Button>
            </div>

            <div className="main__card main__card--pos-center">
                <ThemeCard
                    contents={`한 주를 시작하는 월요일!<br/>무료함을 달래봐요.`}
                />
            </div>

            <div className="main__search-wrap main__search-wrap--center">
                <SearchForm />
            </div>

            <SwipeableMenu>
                <div>
                    <button>^</button>
                    <ul>
                        <li><button>menu1</button></li>
                        <li><button>menu2</button></li>
                        <li><button>menu3</button></li>
                        <li><button>menu4</button></li>
                    </ul>
                </div>
            </SwipeableMenu>
            
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