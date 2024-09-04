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
    const handleSubmit = async(e)=> {
        e.preventDefault()
        setLoading(true)

        if (!isFormValid()) {
            setErrorMsg('Veuillez remplir tous les champes de formulaire')
            setLoading(false);
            return 
        }
        try {
            const response = await fetch('https://projet12-portfolio-olyk.onrender.com/submit', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
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
                // JSON이 아닌 경우
                const text = await response.text();
                console.error('Unexpected response format:', text);
                setErrorMsg("L'envoie du méssage a échoué. Réponse inattendue du serveur.");
            }
        } catch (error) {
            console.error('Error', error)
            setErrorMsg("L'envoie du méssage a echoué")
            throw error
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <Field
            label='Nom et Prénom'
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
        {errorMsg && (<p>{errorMsg}</p>)}
        <button type='submit' className='button' disabled={loading}>
            Envoyer
            {/* {loading ? "En cours..." : "Envoyer" } */}
        </button>
    </form>
    )
}

export default Form 