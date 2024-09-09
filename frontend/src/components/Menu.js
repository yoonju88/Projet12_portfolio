import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './menu.css'

function Menu() {
    const location = useLocation()
    const currentPage = location.pathname

    return (
        <header  className={`${currentPage === '/' ? 'menu' : currentPage === '/contact' ? 'contact_menu':'add_bg menu' } `}>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclassname='active' className="underLine">ACCUEIL</NavLink></li>                    
                    <li><NavLink to="/about_me" activeclassname='active' className="underLine">PRÉSENTATION</NavLink></li>
                    <li><NavLink to="/works" activeclassname='active' className="underLine">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contact" activeclassname='active' className="underLine">CONTACT</NavLink ></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu