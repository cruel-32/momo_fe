import React from 'react'

import './Scroller.scss'

export const Scroller = props =>{
    const { children } = props

    return (
        <div className="scroller">
            <div className="scroller__content-wrap">
                {children}
            </div>
        </div>
    )
}