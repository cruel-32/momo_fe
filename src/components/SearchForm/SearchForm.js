import React from 'react'

import './SearchForm.scss'

import btnSearch from 'images/icons/btn_search.svg'
import recommendedStar from 'images/icons/n_recommen_star.svg'


export const SearchForm = props =>{

    return (
        <div className="search-form">
            <div className="search-form__bg">
                <input
                    className="search-form__inp"
                    type="text"
                    // placeholder="검색어를 입력하세요"
                />
                <button className="search-form__btn">
                    <img className="search-form__ico" src={btnSearch} alt="search button" />
                </button>
            </div>
            <RecommendedWords />
            <hr className="search-form__hr"/>
        </div>
    )
}

export const RecommendedWords = props => {

    return (
        <div className="recommended-words">
            <div className="recommended-words__title">
                <i className="recommended-words__ico">
                    <img className="recommended-words__img" src={recommendedStar} alt="별" />
                </i>
                추천 검색어
            </div>
            <ul className="recommended-words__list">
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">치맥파티</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">영화감상</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">추천 검색어</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">코인노래방</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">코인노래방</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">코인노래방</button>
                </li>
                <li className="recommended-words__item">
                    <button type="button" className="recommended-words__btn">코인노래방</button>
                </li>
            </ul>
        </div>
    )
}