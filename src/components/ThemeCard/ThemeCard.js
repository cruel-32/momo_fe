import React from 'react'

import './ThemeCard.scss'

export const ThemeCard = ({contents}) =>{

    return (
        <div className="theme-card" dangerouslySetInnerHTML={{__html:contents}}>
        </div>
    )
}