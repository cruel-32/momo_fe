import React, { useState } from 'react'
import './SideMenu.scss'

import { LinkLists } from 'components/LinkLists/LinkLists.js'

import btnSet from 'images/side-menu/btn_set.svg'
import btnBell from 'images/side-menu/btn_bell.svg'
import profile from 'images/profile.png'

export const SideMenu = () =>{
    const [ listItems ] = useState([
        {text:'가입한 모임', src:'/',},
        {text:'공지사항', src:'/',},
        {text:'자주하는 질문', src:'/',},
    ])
    
    return (
        <div className="side-menu side-menu--side-left">
            <div className="side-menu__side-account-menu side-menu__side-account-menu--active">
                <div className="ico-btns ico-btns--pos-top-right">
                    <button className="ico-btns__btn ico-btns__btn--set "><img className="ico-btns__btn-img" src={btnSet} alt="set" /></button>
                    <button className="ico-btns__btn ico-btns__btn--bell "><img className="ico-btns__btn-img" src={btnBell} alt="bell" /></button>
                </div>

                <section className="user-info">
                    <div className="user-info__profile user-info__profile--pd-bot">
                        <img src={profile} alt="profile"/>
                    </div>
                    <div className="user-info__intro">
                        <h1 className="user-info__nickname">
                            라이언사랑
                            <button className="user-info__btn--round">MY</button>
                        </h1>
                        <span className="user-info__email">ryan.love_@naver.com</span>
                    </div>
                </section>

                {listItems && <LinkLists items={listItems} />}
                    
            </div>
            <div className="side-menu__side-club">

            </div>
        </div>
    )
}