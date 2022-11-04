import React from "react"
import RightSide from "../LoginPage/components/RightSide";
import Logo from "../LoginPage/components/Logo";
import RegistrationForm from "./components/RegistrationForm";



const RegistrationPage = () => {
    return (
        <div>
            <div className="left_side">
                <Logo/>
                <RegistrationForm/>
            </div>
            <RightSide/>
        </div>
    )
}

export default RegistrationPage
