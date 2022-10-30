import React, { useState }  from "react"

import "../index.css"



const ManualLogin = () => {
    const [email, setEmail] = useState("Введіть дійсну адресу");
    const [password, setPassword] = useState("Актуальний пароль");
    const [passwordShown, setPasswordShown] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password);
        // clearing the values
        setEmail("");
        setPassword("");
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
        </form>
    )
}

export default ManualLogin
