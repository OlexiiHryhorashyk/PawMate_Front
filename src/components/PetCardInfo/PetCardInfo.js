import React from "react"
import "../../pages/common.css"
import "./PetCardInfo.css"





const PetCardInfo = () => {
    const cardType = "Шукаємо";
    const cardTitle = "Зник кіт Міккі"
    return (
        <div className="CardListing">
            <p className="card_type">{cardType}</p>
            <h1 className="card_title">{cardTitle}</h1>

        </div>
    )
}

export default PetCardInfo