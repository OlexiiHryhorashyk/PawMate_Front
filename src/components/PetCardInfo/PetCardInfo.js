import React from "react"
import "../../pages/common.css"
import "./PetCardInfo.css"
import ImageSlider from "./subcomponents/ImageSlider";
import locationIcon from "./img/location_icon.png"





const PetCardInfo = () => {
    const cardType = "Шукаємо";
    const cardTitle = "Зник кіт Міккі"
    const cardLocation = "У районі вул. Кульпарківська біля заправки"
    return (
        <div className="CardListing">
            <p className="card_type">{cardType}</p>
            <h1 className="card_title">{cardTitle}</h1>
            <p className="card_location"><img id='locationIcon' src={locationIcon} alt={'*'}/><span id={"loc_text"}>{cardLocation}</span></p>

            <ImageSlider/>
        </div>
    )
}

export default PetCardInfo
