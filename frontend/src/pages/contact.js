import React, {useState} from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Form from '../containers/Form'
import './contact.css'
import Modal from '../components/Modal'
import sendOk from '../images/icons/sending_ok.png'

function Contact() {
    const [isMolalOpen, setIsModalOpen]= useState(false)
    
    return (
        <>
            <Menu />
            <main className='contact_page'>
                <div className='contact_container'>
                    <div>
                        <h2>CONTACT</h2>
                        <p>N'hésitez pas à me contacter si vous souhaitez en savoir plus et si vous êtes intéressé par une collaboration.</p>
                    </div>
                    <Form 
                        setIsModalOpen={setIsModalOpen}
                    />                      
                    {isMolalOpen && (
                        <Modal 
                            onClick={()=> setIsModalOpen(!isMolalOpen)}
                            message="Votre message a été envoyé avec succès."
                            remarque ="Il s'agit d'une version de démonstration. Le message n'est pas réellement envoyée."
                            image={sendOk}
                            alt="sending success"
                        />
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact