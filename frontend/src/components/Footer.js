import React from 'react'
import {Link, useLocation} from 'react-router-dom'
//import linkedIn from '../images/icons/linkedIn.png'
//import GitHub from '../images/icons/gitHub.png'
//import email from '../images/icons/email.png'

import '../components/footer.css'
 


function Footer () {
    const location = useLocation()
    const currentPage = location.pathname

    return (
        <footer className={currentPage === '/' ? '' :  'footer_bg'}>
            <Link to="https://www.linkedin.com/in/yoonju-t" target="_blank">linkedIn</Link>
            <span className='separator'></span>
            <Link to="https://github.com/yoonju88?tab=repositories" target="_blank">GitHub</Link>
            <span className='separator'></span>
            <Link  to="mailto: yoonju.t@gmail.com" target="_blank">E-mail</Link>
        </footer>
    )
}

export default Footer
/*
<footer className={currentPage === '/' ? '' :  'footer_bg'}>
            <Link to="https://www.linkedin.com/in/yoonju-t" target="_blank">linkedIn</Link>
            <span className='separator'></span>
            <Link to="https://github.com/yoonju88?tab=repositories" target="_blank">GitHub</Link>
            <span className='separator'></span>
            <Link  to="mailto: yoonju.t@gmail.com" target="_blank">E-mail</Link>
        </footer>*/
/*
        <footer className={currentPage === '/' ? '' :  'footer_bg'}>
        <Link to="https://www.linkedin.com/in/yoonju-t" target="_blank">
            <img src={linkedIn} alt="linkedIn" className='icon'/>
        </Link>
        <Link to="https://github.com/yoonju88?tab=repositories" target="_blank">
            <img src={GitHub} alt="linkedIn" className='icon'/>
        </Link>
        <Link  to="mailto: yoonju.t@gmail.com" target="_blank">
            <img src={email} alt="email" className='icon'/>
        </Link>
    </footer>*/