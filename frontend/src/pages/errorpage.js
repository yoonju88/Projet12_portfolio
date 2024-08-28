import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './error.css'

function NotFound (){
    return (
        <>
            <Menu />
            <main className='error'>
                <section className='error_container'>
                    <h1>404</h1>
                    <p className='errorPage_message'>La page que vous demnadez n'existe pas.</p>
                    <span>
                        <Link to="/" className='button'> Retour à l'acceuil </Link>
                    </span>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default NotFound