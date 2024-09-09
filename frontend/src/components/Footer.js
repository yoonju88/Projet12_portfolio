import React from 'react'
import {Link, useLocation} from 'react-router-dom'
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