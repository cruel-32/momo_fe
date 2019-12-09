import React from 'react'
import './SideMenu.scss'
import btnSet from 'images/side-menu/btn_set.svg'
import btnBell from 'images/side-menu/btn_bell.svg'

export const SideMenu = () =>{
    return (
        <div className="side-menu side-menu--side-left">
            <SideAccountMenu></SideAccountMenu>
            <SideClubMenu></SideClubMenu>
        </div>
    )
}

export const SideAccountMenu = ()=>{
    return (
        <div className="side-menu__side-account-menu side-menu__side-account-menu--active">
            <div className="side-menu__side-btn-wrap side-menu__side-btn-wrap--pd">
                <button className="side-menu__side-btn side-menu__side-btn--set "><img className="side-menu__side-btn-img" src={btnSet} alt="set" /></button>
                <button className="side-menu__side-btn side-menu__side-btn--bell "><img className="side-menu__side-btn-img" src={btnBell} alt="bell" /></button>
            </div>


        </div>
    )
}

export const SideClubMenu = ()=>{
    return (
        <div className="side-menu__side-club">


        </div>
    )
}