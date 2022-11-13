import React from "react"
import "../../pages/common.css"
import "./PetCardInfo.css"
import ImageSlider from "./subcomponents/ImageSlider";
import locationIcon from "./subcomponents/icons/location_icon.png"
import Contacts from "./subcomponents/Contacts";
import CardLocationMap from "./subcomponents/CardLocationMap";





const PetCardInfo = () => {
    const cardType = "Шукаємо";
    const cardTitle = "Зник кіт Міккі";
    const cardLocation = "У районі вул. Кульпарківська біля заправки";
    const publicDate = "10.06.2022";
    const cardText = "Будь ласка, допоможіть знайти друга сім'ї! Кіт вискочив з машини на виїзді з міста Хуст у напрямку до Львова. Побіг у кущі, потім в дике поле біля села Іза. Шукали декілька днів, але мали поїхати до Львова. Кіт невеликий, йому 5 років, чіпований, порода схожа на невську маскарадну."
    return (
        <div className="CardListing">
            <p className="card_type">{cardType}</p>
            <h1 className="card_title">{cardTitle}</h1>
            <p className="card_location"><img id='locationIcon' src={locationIcon} alt={'*'}/><span id={"loc_text"}>{cardLocation}</span></p>
            <ImageSlider/>
            <Contacts/>
            <CardLocationMap/>
            <p className="PublicDate">Опубліковано {publicDate}</p>
            <p className="card_text">{cardText}</p>
        </div>
    )
}

export default PetCardInfo
