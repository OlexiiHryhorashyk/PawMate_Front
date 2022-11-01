import React from "react"
import "../index.css"
import ManualLogin from "./ManualLogin";
import LoginText from "./LoginText";
import MediaLogin from "./MediaLogin";
import SepLine from "./SepLine";




const LoginForm = () => {
    return (
        <div id="login_form">
            <LoginText/>
            <MediaLogin/>
            <SepLine/>
            <ManualLogin/>
        </div>
    )
}

export default LoginForm
