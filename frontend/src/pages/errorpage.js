import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './error.css'
import Return from '../images/icons/return.png'

function NotFound (){
    return (
        <>
            <Menu />
            <main className='error_page'>
                <section className='error_container'>
                    <div className="error_txt_container">
                        <h1>404</h1>
                        <p className='errorPage_message'>La page que vous demnadez n'existe pas.</p>
                    </div>
                    <div className="error_btn_container">    
                        <Link to="/" className='button btnv2'>                             
                            Retour à l'acceuil 
                            <img src={Return} alt="return icon"/>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default NotFound