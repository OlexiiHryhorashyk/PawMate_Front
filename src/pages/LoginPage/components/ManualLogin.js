import React, { useState }  from "react"

import "../index.css"
import {validEmail, validPassword} from '../../regex.js';


const ManualLogin = () => {
    const [email, setEmail] = useState("Введіть дійсну адресу");
    const [password, setPassword] = useState("Актуальний пароль");
    const [passwordShown, setPasswordShown] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let errorMessage = document.getElementById("login_error");
        console.log(email, password);
        let emailValid = ValidateEmail();
        let passwordValid = ValidatePassword();
        if(emailValid && passwordValid){
            console.log("Validated!");
            errorMessage.innerText = " ";
            //Here we should send data to BackEnd
        }
        else{
            console.log("Not validated!");
            errorMessage.innerText = "Помилка авторизації! Перевірте коректність введених данних.";
        }
        //setEmail("");
        //setPassword("");
    }

    function ValidateEmail(){
        let emailInput = document.getElementById('email')
        emailInput.style.borderColor = "#F2F0ED";
        if (!validEmail.test(email)) {
            emailInput.style.borderColor = "#e54409";
            console.log("Email validation error!");
            return false;
        } else{
            return true;
        }
    }

    function ValidatePassword(){
        let passwordInput = document.getElementById('password');
        if (!validPassword.test(password)) {
            passwordInput.style.borderColor = "#e54409";
            console.log("Password validation error!");
            return false;
        } else{
            passwordInput.style.borderColor = "#F2F0ED";
            return true;
        }
    }

    const clearEmailInput = () => {
        if (email === "Введіть дійсну адресу"){
            setEmail("");
        }
    };

    const clearPasswordInput = () => {
        if (password === "Актуальний пароль"){
            setPassword("");
        }
    };

    const initialEmailCapture = () => {
        if (email === ""){
            setEmail("Введіть дійсну адресу");
        }
    };

    const initialPasswordCapture = () => {
        if (password === ""){
            setPassword("Актуальний пароль");
        }
    };

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    return (
        <form className="login_form">
            <label htmlFor="email">Email-адреса</label>
            <input type="text" id="email" name="email"  value={email} onBlur={initialEmailCapture} onFocus={clearEmailInput} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Ваш пароль</label>
            <input type={passwordShown ? "text" : "password"} id="password" name="password" value={password}  onBlur={initialPasswordCapture} onFocus={clearPasswordInput} onChange={(e) => setPassword(e.target.value)}/>
            <div className="showPassword" onClick={togglePassword}/>
            <button className="confirm_button"  type="submit" onClick={handleSubmit}>Увійти в акаунт</button>
            <p id="login_error"> </p>
        </form>
    )
}

export default ManualLogin
