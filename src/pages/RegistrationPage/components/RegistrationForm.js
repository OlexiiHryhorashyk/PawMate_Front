import React, { useState }  from "react"

import "../index.css"
import "../../LoginPage/index.css"
import "../../common.css"
import RegistrationText from "./RegistrationText";
import {validEmail, validPassword, validPhoneNumber, validUsername} from '../../regex.js';




const RegistrationForm = () => {
    const [username, setUsername] = useState("Введіть ваше ім'я");
    const [email, setEmail] = useState("Введіть дійсну адресу");
    const [phone, setPhone] = useState("+380xxxxxxx");
    const [password, setPassword] = useState("Введіть пароль");
    const [passwordRepeat, setPasswordRepeat] = useState("Повторіть пароль");
    const [passwordShown, setPasswordShown] = useState(false);



    function handleSubmit(e) {
        e.preventDefault();
        let errorMessage = document.getElementById("regist_error");
        console.log(username, email, phone, password, passwordRepeat);
        let usernameValid = ValidateUsername();
        let emailValid = ValidateEmail();
        let phoneValid = ValidatePhoneNumber();
        let passwordValid = ValidatePassword();
        let passRepeated = isPassRepeated();
        if(usernameValid && emailValid && phoneValid && passwordValid && passRepeated){
            console.log("Validated!");
            errorMessage.innerText = " ";
            //Here we should send data to BackEnd
        }
        else{
            console.log("Not validated!");
            errorMessage.innerText = "Помилка реєстрації! Перевірте коректність введених данних.";
        }
    }

    function ValidateUsername(){
        let usernameInput = document.getElementById('username')
        usernameInput.style.borderColor = "#F2F0ED";
        if (!validUsername.test(username)) {
            usernameInput.style.borderColor = "#e54409";
            console.log("Username validation error!");
            return false;
        } else{
            return true;
        }
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

    function ValidatePhoneNumber(){
        let phoneInput = document.getElementById('phone')
        phoneInput.style.borderColor = "#F2F0ED";
        if (!validPhoneNumber.test(phone)) {
            phoneInput.style.borderColor = "#e54409";
            console.log("Phone number validation error!");
            return false;
        } else{
            return true;
        }
    }

    function ValidatePassword(){
        let passwordInput = document.getElementById('password');
        let passLabel = document.getElementById('passLabel');
        if (!validPassword.test(password)) {
            passwordInput.style.borderColor = "#e54409";
            passLabel.innerText = "Пароль має містить лише латинські літери та цифри!";
            passLabel.style.color = "#e54409";
            console.log("Password validation error!");
            return false;
        } else{
            passwordInput.style.borderColor = "#F2F0ED";
            passLabel.innerText = "Введіть пароль";
            passLabel.style.color = "#25201A";
            return true;
        }
    }

    function isPassRepeated(){
        let passRepeatInput = document.getElementById('password_repeat')
        passRepeatInput.style.borderColor = "#F2F0ED";
        if (password === passwordRepeat){
            return true
        }
        else{
            passRepeatInput.style.borderColor = "#e54409";
            console.log("Error - Password is not repeated:", password, "-", passwordRepeat)
            return false
        }
    }

    const clearUsernameInput = () => {
        if (username === "Введіть ваше ім'я"){
            setUsername("");
        }
    };

    const clearEmailInput = () => {
        if (email === "Введіть дійсну адресу"){
            setEmail("");
        }
    };

    const clearPhoneInput = () => {
        if (phone === "+380xxxxxxx"){
            setPhone("+380");
        }
    };
    const clearPasswordInput = () => {
        if (password === "Введіть пароль"){
            setPassword("");
        }
    };

    const clearPasswordRepeatInput = () => {
        if (passwordRepeat === "Повторіть пароль"){
            setPasswordRepeat("");
            let emailInput = document.getElementById('password_repeat')
            emailInput.style.borderColor = "#F2F0ED";
        }
    };

    const initialUsernameCapture = () => {
        if (username === ""){
            setUsername("Введіть ваше ім'я");
        }
    };

    const initialEmailCapture = () => {
        if (email === ""){
            setEmail("Введіть дійсну адресу");
        }
    };

    const initialPhoneCapture = () => {
        if (phone === "+380" || phone === ""){
            setPhone("+380xxxxxxx");
        }
    };

    const initialPasswordCapture = () => {
        if (password === ""){
            setPassword("Введіть пароль");
            let emailInput = document.getElementById('password_repeat')
            emailInput.style.borderColor = "#F2F0ED";
        }
    };


    const initialPasswordRepeatCapture = () => {
        if (passwordRepeat=== ""){
            setPasswordRepeat("Повторіть пароль");
        }
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div id="login_form">
            <RegistrationText/>
            <form className="registration_form">
                <label htmlFor="username">Ім'я користувача</label>
                <input type="text" id="username" name="username"  value={username} onBlur={initialUsernameCapture} onFocus={clearUsernameInput} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="email">Email-адреса</label>
                <input type="text" id="email" name="email"  value={email} onBlur={initialEmailCapture} onFocus={clearEmailInput} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone">Номер телефона</label>
                <input type="text" id="phone" name="phone"  value={phone} onBlur={initialPhoneCapture} onFocus={clearPhoneInput} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="password" id="passLabel">Введіть пароль</label>
                <input type={passwordShown ? "text" : "password"} id="password" name="password" value={password}  onBlur={initialPasswordCapture} onFocus={clearPasswordInput} onChange={(e) => setPassword(e.target.value)}/>
                <div id = "reg_show_pass" className="showPassword" onClick={togglePassword}/>
                <label htmlFor="password_repeat"> Повторіть пароль</label>
                <input type={passwordShown ? "text" : "password"} id="password_repeat" name="password_repeat" value={passwordRepeat}  onBlur={initialPasswordRepeatCapture} onFocus={clearPasswordRepeatInput} onChange={(e) => setPasswordRepeat(e.target.value)}/>
                <p id="regist_error"> </p>
                <button id="regist_confirm" className="confirm_button"  type="submit" onClick={handleSubmit}>Зареєструватись</button>
            </form>
        </div>
    )
}

export default RegistrationForm
