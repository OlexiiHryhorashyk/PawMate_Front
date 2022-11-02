import React from "react"
import "./index.css"
import Like from "./Heart.svg"

function CardItem(props) {
    return (
        <div className="card">
            <div className="card__media">
                <div className="card__media-image"><img src={props.image} alt=""/></div>
                <div className="card__media-like"><img src={Like} alt=""/></div>
            </div>
            <div className="card__content">
                <div className="card__content-type">{props.type}</div>
                <div className="card__content-name">{props.name}</div>
                {
                    !props.price === true ?
                        null
                        :
                        <div className="card__content-price">{props.price} грн.</div>
                }
            </div>
        </div>
    )
}

export default CardItem