import React from 'react'

import './SearchForm.scss'

import btnSearch from 'images/icons/btn_search.svg'


export const SearchForm = props =>{

    return (
        <div className="search-form">
            <input className="search-form__inp" type="text" />
            <button className="search-form__btn">
                <img className="main__btn" src={btnSearch} alt="search button" />
            </button>
            <RecommentWords />
        </div>
    )
}

export const RecommentWords = props => {

    return (
        <div className="recomment-words">
            <div className="recomment-words__title">추천 검색어</div>
            <div className="recomment-words__lists">
                <ul className="recomment-words__ul">
                    <li className="recomment-words__list">
                        치맥파티
                    </li>
                    <li className="recomment-words__list">
                        영화감상
                    </li>
                    <li className="recomment-words__list">
                        코인노래방
                    </li>
                </ul>
            </div>
        </div>
    )
}