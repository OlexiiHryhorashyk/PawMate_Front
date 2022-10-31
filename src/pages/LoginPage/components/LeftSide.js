import React from "react"
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import "../index.css"





const LeftSide = () => {
    return (
        <div className="left_side">
            <Logo/>
            <LoginForm/>
        </div>
    )
}

export default LeftSide
