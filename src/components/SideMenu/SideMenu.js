import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, } from '@material-ui/core'
import { Link } from "react-router-dom";
import { LOGOUT_ASYNC } from 'store/types/account'
import { GET_TOGETHERS_ASYNC } from 'store/types/together'
import classnames from 'classnames'
import './SideMenu.scss'

import btnSet from 'images/icons/btn_set.svg'
import btnBell from 'images/icons/btn_bell.svg'
import profile from 'images/profile.png'
import btnBack from 'images/icons/btn_back.svg'
import btnPlus from 'images/icons/btn_plus.svg'

export const SideMenu = () =>{
    const dispatch = useDispatch()

    const account = useSelector(store => store.account, [])
    const together = useSelector(store => store.together, [])

    const [ active, setActive ] = useState(true)

    const [ listItems ] = useState([
        {text:'가입한 모임', src:'/',},
        {text:'공지사항', src:'/',},
        {text:'자주하는 질문', src:'/',},
    ])

    const logout = () => {
        dispatch({ type: LOGOUT_ASYNC })
    }

    // useEffect(()=>{
    //     console.log('SideMenu useEffect')
    //     if(account.togethers){
    //         console.log('account.togethers')
    //         dispatch({type:GET_TOGETHERS_ASYNC, payload:{
    //             target : 'myTogethers',
    //             params : {
    //                 _ids : account.togethers
    //             }
    //         }})
    //     }

    // }, [ account, dispatch ])

    return (
        <div className="side-menu side-menu--side-left" >
            <div className={classnames("side-menu__side-account-menu",{
                "side-menu__side-account-menu--active" : active
            })}  onClick={e => setActive(true)} >
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
            <div className={classnames("side-menu__side-club", {
                "side-menu__side-club--active" : !active
            })}  onClick={e => setActive(false)}>
                <div className="my-club">
                    <Link to='/' className="my-club__link">
                        <img src={btnPlus} alt="모임 만들기" />
                    </Link>
                    {
                        account.togethers && 
                        account.togethers.map((together,i) => 
                        <Link key={i} to={`/togethers/${together._id}`} className="my-club__link">
                                {together.title}
                            </Link>
                        )
                    }
                </div>
                <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>

            </div>
        </div>
    )
}