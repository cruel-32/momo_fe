import React, { useState, useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, } from '@material-ui/core'
import { Link } from "react-router-dom";
import { LOGOUT_ASYNC } from 'store/types/account'
import classnames from 'classnames'
import './SideMenu.scss'

import { Scroller } from 'components/Scroller/Scroller'

import btnSet from 'images/icons/btn_set.svg'
import btnSetActive from 'images/icons/btn_set_active.svg'
import btnBell from 'images/icons/btn_bell.svg'
import btnBellActive from 'images/icons/btn_bell_active.svg'
import profile from 'images/profile.png'
import btnBack from 'images/icons/btn_back.svg'
import btnPlus from 'images/icons/btn_plus.svg'
import btnClose from 'images/icons/btn_close.svg'

export const SideMenu = props =>{
    const dispatch = useDispatch()
    const account = useSelector(store => store.account, [])
    const { setSideState } = props

    const [ accActive, setAccActive ] = useState(true)
    const [ clubActive, setclubActive ] = useState(false)

    const [ listItems ] = useState([
        {text:'가입한 모임', src:'/',},
        {text:'공지사항', src:'/',},
        {text:'자주하는 질문', src:'/',},
    ])

    const logout = () => {
        dispatch({ type: LOGOUT_ASYNC })
    }

    const toggleAccState = e => {
        if(!accActive){
            setclubActive(false)
            setTimeout(()=>{
                setAccActive(true)
            }, 200)
        }
    }

    const toggleClubState = e => {
        if(!clubActive){
            setAccActive(false)
            setTimeout(()=>{
                setclubActive(true)
            }, 200)
        }
    }

    return (
        <div className="side-menu side-menu--side-left" >
            <button
                type="button"
                className="side-menu__btn-close"
                onClick={e => setSideState({left:false})}
            >
                <img className="side-menu__ico-close" src={btnClose} alt="close" />
            </button>
            <div className={classnames("side-menu__side-account-menu",{
                "side-menu__side-account-menu--active" : accActive
            })}  onClick={toggleAccState} >

                <div className={classnames("ico-btns ico-btns--pos-top-right", {'none' : !accActive})}>
                    <button className="ico-btns__btn ico-btns__btn--set ">
                        <img className="ico-btns__btn-img" src={btnSet} alt="set" />
                    </button>
                    <button className="ico-btns__btn ico-btns__btn--bell ">
                        <img className="ico-btns__btn-img" src={btnBell} alt="bell" />
                    </button>
                </div>
                
                <section className="user-info user-info--mg-bot">
                    <img src={account.thumbnail || profile} alt="profile" className="user-info__profile user-info__profile--pd-bot" />
                    {
                        <div className="user-info__intro">
                            <h1 className="user-info__title">
                                <span className="user-info__nickname">
                                    {account.username || '로그인 하세요'}
                                </span>
                                {   
                                    account.email ?
                                    <button className={classnames('user-info__btn', {'none' : !accActive})}>MY</button> : 
                                    <button className={classnames('user-info__btn', {'none' : !accActive})}>LOGIN</button>
                                }
                            </h1>
                            <span className={classnames("user-info__email", {'none' : !accActive})}>
                                {account.email || ''}
                            </span>
                        </div>
                    }
                </section>

                {
                    <ul className={classnames('link-lists', {'none' : !accActive})}>
                        {
                            listItems.map((item,index)=>
                                <li className="link-lists__li" key={index}>
                                    <Link to={item.src} className="link-lists__link" >{item.text}</Link>
                                    <img src={btnBack} alt="arrow_right" className="link-lists__icon link-lists__icon--arr-right" />
                                </li>
                            )
                        }
                    </ul>
                }
                {
                    <Button onClick={logout} className={classnames({'none' : !accActive})} >LOGOUT</Button>
                }
                    
            </div>
            <div className={classnames("side-menu__side-club", {
                "side-menu__side-club--active" : clubActive
            })}  onClick={toggleClubState}>
                <Scroller style={{
                    "padding" : "21.94444vw 0"
                }}>
                    <ul className="my-club">
                        {
                            account.owns.length ?
                                account.owns.map((together,i) =>
                                    <li className="my-club__item">
                                        <Link key={i} to={`/togethers/${together._id}`} className="my-club__link">
                                            {together.title}
                                            <strong className="my-club__master-text" >MASTER</strong>
                                        </Link>
                                        <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                                    </li>
                                )
                            :
                                <li className="my-club__item">
                                    <Link to='/' className="my-club__link">
                                        <img src={btnPlus} alt="모임 만들기" />
                                    </Link>
                                    <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                                </li>
                        }
                        <li className="my-club__item">
                            <Link to='/' className="my-club__link">
                                <img src={btnPlus} alt="모임 만들기" />
                            </Link>
                            <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                        </li>
                        <li className="my-club__item">
                            <Link to='/' className="my-club__link">
                                <img src={btnPlus} alt="모임 만들기" />
                            </Link>
                            <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                        </li>
                        <li className="my-club__item">
                            <Link to='/' className="my-club__link">
                                <img src={btnPlus} alt="모임 만들기" />
                            </Link>
                            <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                        </li>
                        <li className="my-club__item">
                            <Link to='/' className="my-club__link">
                                <img src={btnPlus} alt="모임 만들기" />
                            </Link>
                            <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>
                        </li>
                        
                    </ul>
                </Scroller>
            </div>
        </div>
    )
}