import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import "./header.css"


function Header() {
    const location = useLocation()
    const currentPage = location.pathname

    return (
        <header className={`${currentPage === '/' ? "menu_home" : "menu"}`}>
            {currentPage === '/' ?
                (
                    <>
                        <nav>
                            <ul>
                                <li><Link to="/#presentation" className='link'>PRÉSENTATION</Link></li>
                                <li><Link to="/#realisations" className='link'>RÉALISATIONS</Link></li>
                                <li><Link to="/#competences" className='link'>COMPÉTENCES</Link></li>
                                <li><Link to="/#competences" className='link'>CONTACT</Link></li>
                            </ul>
                        </nav>
                        <div className='banner'>
                            <h1 className='banner_title'> BONJOUR, <br /> JE SUIS YOONJU HO</h1>
                            <p className='banner_subtitle'>DÉVELOPPEUSE WEB, FRONT-END</p>
                        </div>
                    </>
                )
                : (
                    <nav>
                        <ul>
                            <li><NavLink to="/" activClassName='active'>HOME</NavLink></li>
                            <li>
                                <NavLink to="/realisations" activClassName='active'>RÉALISATIONS</NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default Header