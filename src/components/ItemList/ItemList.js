import React from 'react'
import './ItemList.scss'

// const descWidth = document.querySelector(".item-list__desc").offsetWidth;

export const ItemList = props => {

    const { items } = props;

    return (
        <div className="items">
            {
                items.map((item, index) =>
                    <div className="item-list">
                        <figure className="item-list__thumbnail">
                            <img src={item.imgSrc} />
                        </figure>
                        <div className="item-list__info">
                            <strong className="item-list__title">{item.title}</strong>
                            <div className="item-list__desc">
                                <span className="item-list__action">{item.schedule}일 전 활동</span>
                                <em className="item-list__personnel">
                                    {item.personnel}명
                                </em>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )

}