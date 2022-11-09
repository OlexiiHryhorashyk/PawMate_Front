import React from "react"
import "../index.css"



const LoginText = () => {
    return (
        <div>
            <h1 id="login_text">Увійдіть до PawMate</h1>
            <p className="login_page_text">Ще не маєте акаунту? <a href="http://localhost:3000/registration_page" id="regist_url">Зареєструватися</a></p>
        </div>
    )
}

export default LoginText
