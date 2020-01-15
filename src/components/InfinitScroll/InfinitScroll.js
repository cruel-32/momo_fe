import React from 'react'
import { throttle } from 'throttle-debounce'
import './InfinitScroll.scss'

export const InfinitScroll = props =>{
    const {
        children,
        onScroll,
        gradientColor,
        style,
        fps=300
    } = props

    const throttled = throttle(fps, (e) => {
        onScroll && onScroll(e)
    });

    return (
        <div className="infinit-scroll" style={style} onScroll={throttled}>
            {
                gradientColor &&
                <div className="infinit-scroll__gradient infinit-scroll__gradient--pos-top"
                    style={{

                        "background" : `linear-gradient(to bottom, ${gradientColor || '#fff'} 0%,rgba(255,255,255,0) 100%)`
                    }}
                ></div>
            }
            {children}
            {
                gradientColor &&
                <div className="infinit-scroll__gradient infinit-scroll__gradient--pos-bot"
                    style={{
                        "background" : `linear-gradient(to top, ${gradientColor || '#fff'} 0%,rgba(255,255,255,0) 100%)`
                    }}
                ></div>
            }
        </div>
    )
}