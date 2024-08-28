import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './home.css'
import {Link} from 'react-router-dom'
//import ProfileYJ from '../images/pages/yoonju.webp'


function Home() {
    return (
        <div className='home_page'>
            <Menu />
            <main>
                <div className='homeTxt_container'>
                    <h1>YOONJU <br /> TERRENOIRE</h1>
                    <p>DÉVELOPPEUSE WEB, FRONT END</p>
                </div>
            </main>
            <Footer />
        </div>


    )
}

export default Home