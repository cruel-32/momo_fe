import React, { useState,  } from 'react'

import './SwipeableMenu.scss'

export const SwipeableMenu = ({direction='bottom', children}) =>{

    return (
        <div className={`swipeable-menu swipeable-menu--${direction}`}>
            {children}
        </div>
    )
}
