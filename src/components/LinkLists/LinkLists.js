import React from 'react'
import { Link } from "react-router-dom";

import './LinkLists.scss'

export const LinkLists = props =>{
    const { items } = props;

    return (
        <ul className="link-lists">
        {
            items.map((item,index)=>
                <li className="link-lists__li" key={index}>
                    <Link to={item.src} className="link-lists__link" >{item.text}</Link>
                </li>
            )
        }
        </ul>
    )
}