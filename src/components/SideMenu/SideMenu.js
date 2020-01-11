import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_ASYNC } from 'store/actions/account'
import { Button, } from '@material-ui/core'
import { Link } from "react-router-dom";
import { GET_ACCOUNT_DETAIL_ASYNC, } from 'store/actions/account'

import './SideMenu.scss'

import btnSet from 'images/icons/btn_set.svg'
import btnBell from 'images/icons/btn_bell.svg'
import profile from 'images/profile.png'
import btnBack from 'images/icons/btn_back.svg'
import btnPlus from 'images/icons/btn_plus.svg'

export const SideMenu = () =>{
    const dispatch = useDispatch()

    const account = useSelector(store => store.account, [])

    const [ listItems ] = useState([
        {text:'가입한 모임', src:'/',},
        {text:'공지사항', src:'/',},
        {text:'자주하는 질문', src:'/',},
    ])

    const logout = () => {
        dispatch({ type: LOGOUT_ASYNC })
    }

    useEffect(()=>{
        const { _id, togethers } = account
    
        if(_id && togethers == null){
          dispatch({ type: GET_ACCOUNT_DETAIL_ASYNC, payload:{_id}})
        }
    }, [ account, dispatch ])

    console.log('account : ', account)

    return (
        <div className="side-menu side-menu--side-left">
            <div className="side-menu__side-account-menu side-menu__side-account-menu--active">
                <div className="ico-btns ico-btns--pos-top-right">
                    <button className="ico-btns__btn ico-btns__btn--set "><img className="ico-btns__btn-img" src={btnSet} alt="set" /></button>
                    <button className="ico-btns__btn ico-btns__btn--bell "><img className="ico-btns__btn-img" src={btnBell} alt="bell" /></button>
                </div>

                <section className="user-info user-info--mg-bot">
                    <img src={account.thumbnail || profile} alt="profile" className="user-info__profile user-info__profile--pd-bot" />
                    <div className="user-info__intro">
                        <h1 className="user-info__title">
                            <span className="user-info__nickname">
                                {account.username || '로그인 하세요'}
                            </span>
                            {
                                account.email ?
                                    <button className="user-info__btn">MY</button> : 
                                    <button className="user-info__btn">LOGIN</button>
                            }
                        </h1>
                        <span className="user-info__email">{account.email || ''}</span>
                    </div>
                </section>

                <ul className="link-lists">
                    {
                        listItems.map((item,index)=>
                            <li className="link-lists__li" key={index}>
                                <Link to={item.src} className="link-lists__link" >{item.text}</Link>
                                <img src={btnBack} alt="arrow_right" className="link-lists__icon link-lists__icon--arr-right" />
                            </li>
                        )
                    }
                </ul>

                <Button onClick={logout}>Login Out</Button>
                    
            </div>
            <div className="side-menu__side-club">
                <ul className="my-club">
                    <li className="my-club__li">
                        <Link to="/" className="my-club__link">
                            MATER
                        </Link>
                    </li>
                </ul>

                <span className="side-menu__title">내 모임</span>
            </div>
        </div>
    )
}