import React, { useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, } from '@material-ui/core'
import { Link } from "react-router-dom";
import { LOGOUT_ASYNC } from 'store/types/account'
import classnames from 'classnames'
import './SideMenu.scss'

import btnSet from 'images/icons/btn_set.svg'
import btnBell from 'images/icons/btn_bell.svg'
import profile from 'images/profile.png'
import btnBack from 'images/icons/btn_back.svg'
import btnPlus from 'images/icons/btn_plus.svg'

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
                X
            </button>
            <div className={classnames("side-menu__side-account-menu",{
                "side-menu__side-account-menu--active" : accActive
            })}  onClick={toggleAccState} >

                {
                    accActive && 
                    <div className="ico-btns ico-btns--pos-top-right">
                        <button className="ico-btns__btn ico-btns__btn--set ">
                            <img className="ico-btns__btn-img" src={btnSet} alt="set" />
                        </button>
                        <button className="ico-btns__btn ico-btns__btn--bell ">
                            <img className="ico-btns__btn-img" src={btnBell} alt="bell" />
                        </button>
                    </div>
                }
                
                <section className="user-info user-info--mg-bot">
                    <img src={account.thumbnail || profile} alt="profile" className="user-info__profile user-info__profile--pd-bot" />
                    {
                        accActive && 
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
                    }
                </section>

                {
                    accActive && 
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
                }
                {
                    accActive && 
                    <Button onClick={logout}>LOGOUT</Button>
                }
                    
            </div>
            <div className={classnames("side-menu__side-club", {
                "side-menu__side-club--active" : clubActive
            })}  onClick={toggleClubState}>
                <div className="my-club">
                    <Link to='/' className="my-club__link">
                        <img src={btnPlus} alt="모임 만들기" />
                    </Link>
                    {
                        account.togethers && 
                        account.togethers.map((together,i) => 
                            <Link key={i} to={`/togethers/${together._id}`} className="my-club__link">
                                {together.title}
                                {
                                    account.owns && account.owns.includes(together._id) && 
                                    <strong className="my-club__master-text" >MASTER</strong>
                                }
                            </Link>
                        )
                    }
                </div>
                <span className="side-menu__title">{account.togethers ? '내 모임' : '모임 만들기'}</span>

            </div>
        </div>
    )
}