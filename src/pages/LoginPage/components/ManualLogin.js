import React from "react"
import "../index.css"
import ConfirmButton from "./ConfirmButton";




const ManualLogin = () => {
    return (
        <form className="login_form">
            <label htmlFor="email">Email-адреса</label>
            <input type="text" id="email" name="email" value="Введіть дійсну адресу"/>
            <label htmlFor="password">Ваш пароль</label>
            <input type="text" id="password" name="password" value="Актуальний пароль"/>
            <ConfirmButton></ConfirmButton>
        </form>
    )
}

export default ManualLogin