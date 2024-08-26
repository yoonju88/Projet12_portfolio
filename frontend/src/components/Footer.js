import React from 'react'
import {Link, useLocation} from 'react-router-dom'
//import linkedIn from '../images/icons/linkedIn.png'
//import GitHub from '../images/icons/gitHub.png'
import '../components/footer.css'
 


function Footer () {
    const location = useLocation()
    const currentPage = location.pathname

    return (
        <footer className={currentPage === '/' ? '' :  'footer_bg'}>
            <Link to="https://www.linkedin.com/in/yoonju-t" target="_blank" >LinkedIn</Link>
            <span className='separator'></span>
            <Link to="https://github.com/yoonju88?tab=repositories" target="_blank" >GitHub</Link>
        </footer>
    )

}

export default Footer