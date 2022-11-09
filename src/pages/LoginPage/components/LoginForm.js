<<<<<<< HEAD
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
=======
import React, {useState} from "react"
import Button from "../../../toolkits/button/button";


export const LoginForm = () => {
    const [password, setPassword] = useState()
    const handleSubmit = async (e) => {
        setPassword('qwe')
    }

    return (
        <div className="auth-wrapper-login">
            <form className="auth-wrapper-login-form" onSubmit={handleSubmit} autoComplete="off">
                <div className="auth-wrapper-login-form-password">
                    <Button
                    onClick={handleSubmit}>123</Button>

                </div>
                {password}
            </form>
        </div>
    )
}
>>>>>>> main
