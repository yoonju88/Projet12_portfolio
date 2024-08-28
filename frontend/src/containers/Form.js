import React, {useState} from 'react'
import Field from '../components/Field'

function Form ({setIsModalOpen}) {
    const [loading, setLoading] = useState(false)    
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
        if (!isFormValid()) {
            return 
        }
        setLoading(true)

        setTimeout (() =>{
            setIsModalOpen(true)
            setFormData ({
                nom: '',
                email:'',
                message :''
            })
            setLoading(false)
        }, 500)
    }

    return (
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
        {errorMsg && (<p>{errorMsg}</p>)}
        <button type='submit' className='button'>
            {loading ? "En cours..." : "Envoyer" }
        </button> :  
    </form>
    )
}

export default Form 