import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './menu.css'


function Menu() {
    const location = useLocation()
    const currentPage = location.pathname

    return (
        <header  className={`${currentPage === '/' ? '' :  'add_bg'} menu`}>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName='active'>HOME</NavLink></li>                    
                    <li><NavLink to="/about_me" activeClassName='active'>ABOUT ME</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName='active'>PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contact" activeClassName='active'>CONTACT</NavLink ></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu