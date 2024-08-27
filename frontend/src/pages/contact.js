import React, {useState} from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Field from '../components/Field'
import './contact.css'

function Contact() {
    const [sending, setSending] =useState(false)
    const [formData, setFormData] = useState({
        nom: '',
        email:'',
        message :''
    })
    const handleChange =(e) => {
        const {name, value}= e.target
        setFormData({...formData, [name]: value })
    }
    const isEmailValid =(email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.text(email)
    }
    const isFormValid = () => {
        const {nom, email, message} = formData
        return (
            nom.trim() !=='' &&
            email.trim() !== '' &&
            isEmailValid(email) &&
            message.trim()!==''
        )
    }
    return (
        <>
            <Menu />
            <main className='contact_page'>
                <div className='contact_container'>
                    <div className='contact_title'>
                    <h2>CONTACT</h2>
                    <p>N'hésitez pas à me contacter si vous souhaitez en savoir plus sur moi ou si vous êtes intéressé par une collaboration.</p>
                    </div>
                    <form onsubmit ="#">
                        <Field
                            label='Nom et Prénom'
                            type="text"
                            id="nom"
                            autoComplete="on"
                            value ={formData.nom}
                            onChange={handleChange}
                            maxLength="50"
                        />
                        <Field
                            label='E-mail'
                            type='email'
                            id='email'
                            autoComplete="on"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Field
                            label='Message'
                            type='text'
                            id='message'
                            autoComplete="on"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength= "300"
                        />
                        <button type='submit' className='button'>Envoyer</button> 
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact