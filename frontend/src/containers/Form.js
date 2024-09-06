import React, {useState} from 'react'
import Field, {FIELD_TYPES} from '../components/Field'

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
    }
    const isEmailValid =(email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }
    const isFormValid = () => {
        const {nom, email, message} = formData
        return (
            nom.trim() !== '' &&
            email.trim() !== '' &&
            isEmailValid(email) &&
            message.trim() !== ''
          );
    }
    const handleSubmit = async(e)=> {
        e.preventDefault()
        setLoading(true)
        if (!isFormValid()) {
            setErrorMsg('Veuillez remplir tous les champes de formulaire')
            setLoading(false)
            return 
        }
        try {
            const response = await fetch('https://projet12-portfolio-olyk.onrender.com/send', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            console.log("response:", response)
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const result = await response.json();
                if(result.state === "success") {
                    setIsModalOpen(true)
                    setFormData ({nom: '', email:'', message :''})
                } else {
                    setErrorMsg(result.message)
                    setLoading(false)
                }
            } else {
                console.error('Unexpected response format:', contentType);
                setErrorMsg("L'envoie du méssage a échoué. Réponse inattendue du serveur.");
            }
        } catch (error) {
            console.error('Error', error)
            setErrorMsg("L'envoie du méssage a echoué")
        } finally{
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <Field
            label='Nom'
            fieldType={FIELD_TYPES.INPUT_TEXT}
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
            fieldType={FIELD_TYPES.EMAIL}
            id='email'
            autoComplete="on"
            value={formData.email}
            onChange={handleChange}
        />
        <Field
            label='Message'
            type='textarea'
            fieldType={FIELD_TYPES.TEXTAREA}
            id='message'
            autoComplete="on"
            value={formData.message}
            onChange={handleChange}
            maxLength= "300"
        />
        <button type='submit' className='button' disabled={loading}>        
            {loading ? "En cours..." : "Envoyer" }
        </button>
        {errorMsg && (<p style={{ color : "#f51af2", marginTop: "30px", width:"65%", fontSize:"15px"}}>{errorMsg}</p>)}        
    </form>
    )
}

export default Form 