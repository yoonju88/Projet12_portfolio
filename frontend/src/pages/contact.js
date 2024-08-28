import React, {useState} from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Field from '../components/Field'
import './contact.css'
import Modal from '../components/Modal'
import sendOk from '../images/icons/sending_ok.png'


function Contact() {
    const [isMolalOpen, setIsModalOpen]= useState(false)
    const [formData, setFormData] = useState({
        nom: '',
        email:'',
        message :''
    })
    const [errorMsg, setErrorMsg]=useState('')

    const handleChange =(e) => {
        const { name, value }= e.target
        setFormData({...formData, [name]: value })
        setErrorMsg('')
    }
    const isEmailValid =(email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }
    const isFormValid = () => {
        const {nom, email, message} = formData
        if (nom.trim() === ''|| email.trim()===''|| message.trim()==='') {
            setErrorMsg("Veuillez saisir correctement les champs de formulaire")
            return false;
        }
        if (!isEmailValid(email)){
            setErrorMsg("Veuillez saisir correctement votre E-mail")
            return false
        }
        return true
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        if (isFormValid()){
            setIsModalOpen(true)
            setFormData ({
                nom: '',
                email:'',
                message :''
            })  
        } 
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
                    <form onSubmit={handleSubmit}>
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
                        {errorMsg && (<p className="error_msg">{errorMsg}</p>)}
                        <button type='submit' className='button'>Envoyer</button> 
                    </form>
                    {isMolalOpen && (
                        <Modal 
                        onClick={()=> setIsModalOpen(!isMolalOpen)}
                        message="Votre message a été envoyé avec succès."
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