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
            <main className='error'>
                <section className='error_container'>
                    <div>
                        <h1>404</h1>
                        <p className='errorPage_message'>La page que vous demnadez n'existe pas.</p>
                    </div>
                    <div>    
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