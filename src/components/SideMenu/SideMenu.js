import React from 'react'
import './SideMenu.scss'
import btnSet from 'images/side-menu/btn_set.svg'
import btnBell from 'images/side-menu/btn_bell.svg'

export const SideMenu = () =>{
    return (
        <div className="side-menu side-menu--side-left">
            <SideLoggedAccount></SideLoggedAccount>
            <SideTogether></SideTogether>
        </div>
    )
}

export const SideLoggedAccount = ()=>{
    return (
        <div className="side-menu__side-logged-account side-menu__side-logged-account--active">
            <img src={btnSet} alt="set" />
            <img src={btnBell} alt="bell" />


        </div>
    )
}

export const SideTogether = ()=>{
    return (
        <div className="side-menu__side-club">


        </div>
    )
}