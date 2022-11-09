import {useState} from "react";

import "./index.css"
import Logo from "./Logo.png"
import Location from "./Location.svg"
import Document from "./Document.svg"
import Heart from "./Heart.svg"
import MagnifyingGlass from "./MagnifyingGlass.svg"
import Notification from "./Notification.svg"
import Profile from "./Profile.png"
import List from "./List.svg"
import Geo from "./Geo.svg"

function Header(props) {
    const [lang, setLang] = useState('ua')
    const [type, setType] = useState(null)
    const [newNotification, setNewNotification] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="header">
            <div className="header__menu">
                <div className="header__menu-logo">
                    <a href="#"><img src={Logo} alt="Logo"/></a>
                </div>
                <div className="header__menu-lang">
                    <button
                        className={`header__menu-lang-item ${lang === 'ua' ? 'header__menu-lang-item_selected' : ''}`}
                        onClick={() => setLang('ua')}
                    ><span>🇺🇦</span> Укр
                    </button>
                    <button
                        className={`header__menu-lang-item ${lang === 'en' ? 'header__menu-lang-item_selected' : ''}`}
                        onClick={() => setLang('en')}
                    ><span>🇬🇧</span> Eng
                    </button>
                </div>
                <div className="header__menu-loc">
                    <img src={Geo} alt=""/>
                    <select>
                        <option value="lviv">Львів</option>
                        <option value="kyiv">Київ</option>
                        <option value="rivne">Рівне</option>
                    </select>
                </div>
            </div>

            <div className="header__tab_container">
                <ul className="header__tab">
                    <li className={`header__tab-item ${type === 'adv' ? 'header__tab-item_selected' : ''}`}>
                        <button onClick={() => setType("adv")}><img src={Document} alt=""/>Оголошення</button>
                    </li>
                    <li className={`header__tab-item ${type === 'place' ? 'header__tab-item_selected' : ''}`}>
                        <button onClick={() => setType("place")}><img src={Location} alt=""/>Заклади</button>
                    </li>
                </ul>
            </div>

            <div className="header__actions">
                <a href="#" className="header__actions-icon actions-search"><img src={MagnifyingGlass} alt=""/></a>
                <a href="#" className="header__actions-icon actions-like"><img src={Heart} alt=""/></a>
                <button className={`header__actions-icon actions-notifications ${newNotification ? 'actions-notifications_new' : ''}`}>
                    <img src={Notification} alt=""/>
                </button>
                <div className={`header__actions-menu menu ${isMenuOpen ? 'menu_open' : ''}`}>
                    <button className="menu__button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={Profile} alt=""/>
                        <img src={List} alt=""/>
                    </button>
                    <div className={`menu__items ${isMenuOpen ? '' : 'menu__items_hidden'}`}>
                        <a href="#" className="menu__item">Account</a>
                        <a href="#" className="menu__item">Info</a>
                        <a href="#" className="menu__item">Exit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header