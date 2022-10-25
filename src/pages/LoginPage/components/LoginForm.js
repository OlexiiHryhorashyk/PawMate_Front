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
