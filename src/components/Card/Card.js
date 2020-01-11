import React from 'react'
import './Card.scss'

export const Card = props =>{

    return (
        <section className="card">
            <em className="card__sub-title">{props.subTitle}</em>
            <h1 className="card__title">{props.title}</h1>
            {
                props.children &&
                <div className="card--inner">
                    {props.children}
                </div>
            }
        </section>
    )

}