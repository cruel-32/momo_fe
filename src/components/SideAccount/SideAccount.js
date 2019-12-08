import React from 'react'
import './SideAccount.scss'

export const SideAccount = () =>{
    return (
        <div className="side-account side-account--side-left">
            <SideLoggedAccount></SideLoggedAccount>
            <SideTogether></SideTogether>
        </div>
    )
}

export const SideLoggedAccount = ()=>{
    return (
        <div className="side-account__side-logged-account side-account__side-logged-account--active">
            고정넓이 못주나? 121212
        </div>
    )
}

export const SideTogether = ()=>{
    return (
        <div className="side-account__side-club">

            
        </div>
    )
}