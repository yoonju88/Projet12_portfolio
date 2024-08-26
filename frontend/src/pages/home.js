import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './home.css'


function Home() {
    return (
        <main className='home_page'>
            <Menu />
            <div className='homeTxt_container'>
                <h1>YOONJU <br/> TERRENOIRE</h1>
                <p>DÉVELOPPEUSE WEB, FRONT END</p>
            </div>
            <Footer/>
        </main>
      
        
    )
}

export default Home