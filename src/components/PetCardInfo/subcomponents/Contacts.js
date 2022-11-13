import React from "react"
import "../../../pages/common.css"
import "../PetCardInfo.css"
import phoneIcon from "../subcomponents/icons/phone_icon.png";






const Contacts = () => {
    const ownerName = "Петро";
    const ownerPhone = "+380660724885";
    return (
        <div className="ContactsBox">
            <div className="OwnerInfo">
                <div className="OwnerImage"><p>{ownerName[0]}</p></div>
                <div className="OwnerContacts">
                    <p className="OwnerName">{ownerName}</p>
                    <p className="OwnerPhone"><img id='phoneIcon' src={phoneIcon} alt={'*'}/><span id="loc_text">{ownerPhone}</span></p>
                </div>
            </div>
            <button className="ContactOwnerButton">Написати повідомлення</button>
        </div>
    )
}

export default Contacts
