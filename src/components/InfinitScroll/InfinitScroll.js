import React from 'react'

import './InfinitScroll.scss'

export const InfinitScroll = props =>{
    const {
        children,
        api,
        gradientColor,
        style,
    } = props

    console.log('InfinitScroll api : ', api)

    const scroll = e => {
        console.log('e : ', e)
    }

    return (
        <div className="infinit-scroll" style={style} onScroll={e=>{scroll(e)}}>
            <div className="infinit-scroll__gradient infinit-scroll__gradient--pos-top"
                style={{

                    "background" : `linear-gradient(to bottom, ${gradientColor} 0%,rgba(255,255,255,0) 100%)`
                }}
            ></div>
            {children}
            <div className="infinit-scroll__gradient infinit-scroll__gradient--pos-bot"
                style={{
                    "background" : `linear-gradient(to top, ${gradientColor} 0%,rgba(255,255,255,0) 100%)`
                }}
            ></div>
        </div>
    )
}