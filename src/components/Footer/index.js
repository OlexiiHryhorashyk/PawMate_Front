import React from "react"

import './index.css'
import Logo from "./Logo.png"
import FacebookLogo from "./facebook.png"
import TwitterLogo from "./twitter.png"
import InstagramLogo from "./instagram.png"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top-blocks">
                <div className="footer__top-block">
                    <img id="footer__logo" src={Logo} alt="Logo"/>
                    <h2>Платформа номер один з усіма <br/> тваринячими послугами</h2>
                    <button type="button" id="footer__button_create">Створити аккаунт</button>
                </div>
                <div className="footer__top-block">
                    <li><h4>КАТЕГОРІЯ РАЗ</h4></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                </div>
                <div className="footer__top-block">
                    <li><h4>КАТЕГОРІЯ ДВА</h4></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                </div>
                <div className="footer__top-block">
                    <li><h4>КАТЕГОРІЯ ТРИ</h4></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                    <li><a href="#">Посилання в потрібне місце</a></li>
                </div>
            </div>
            <hr/>
            <div className="footer__bottom-block">
                <p>© Made by students of group FEI-44.</p>
                <div className="footer_bottom_socials">
                    <a href="#" ><img src={FacebookLogo} alt="facebook" /></a>
                    <a href="#" ><img src={InstagramLogo} alt="instagram" /></a>
                    <a href="#" ><img src={TwitterLogo} alt="twitter" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer