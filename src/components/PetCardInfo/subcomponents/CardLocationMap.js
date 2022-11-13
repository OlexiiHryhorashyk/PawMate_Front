import React from "react"
import "../../../pages/common.css"
import "../PetCardInfo.css"
import locationBoxIcon from "./icons/location_box_icon.png";
import {MapContainer, Marker, TileLayer} from "react-leaflet";






const CardLocationMap = () => {
    const location = "Львів, Франківській, вул. Зелена"
    return (
        <div className="LocationMapBox">
            <p className="LocationText"><img id='LocationBoxIcon' src={locationBoxIcon} alt={'*'}/><span>{location}</span></p>
            <MapContainer center={[49.827257216986546, 24.045173323739363]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.827257216986546, 24.045173323739363]}/>
            </MapContainer>
        </div>

    )
}

export default CardLocationMap
