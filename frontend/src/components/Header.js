import React, {useState} from 'react'
import { useSpring, animated } from '@react-spring/web';
import { NavLink } from 'react-router-dom'
import "./header.css"


function Header() {
    const [isCollapsed, setIsCollapsed]=useState(false)
    const animationcollapsed = useSpring ({
        opacity: isCollapsed ? 1 : 0,
        transform : isCollapsed ? 'translateY(0)' : 'translateY(-20px)', 
        display : isCollapsed ? 'block' : 'none',
        height: isCollapsed ? 'auto' : '0px'
    })

    const handleHomeClick = () => {
        setIsCollapsed(!isCollapsed)
    }

return ( 
    <header>
        <nav>
            <ul>
                <li><NavLink to="/" activClassName='active' onClick={handleHomeClick}>HOME</NavLink></li>
                {isCollapsed && (
                <animated.span style={animationcollapsed} className="home_menu">
                    <li><NavLink to="/#presentation" >Présentation</NavLink></li>
                    <li><NavLink to="/#competences" >Compétences</NavLink></li>
                    <li><NavLink to="/#contact" >Contact</NavLink></li>
                </animated.span>
                )}
                <li>
                    <NavLink to="/realisations" activClassName='active'>RÉALISATIONS</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
}

export default Header