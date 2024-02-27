import { useState } from 'react'
import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const NewsletterForm = () => {
    const language = useLanguage()
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
 
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleChange = (e) => {
        if (!isValidEmail(e.target.value)) {
          setError(language === 'fr' ? 'Attention, cette adresse mail n\'est pas valide.' : 'Attention, this email is invalid.');
          console.log(error)
        } else {
          setError(null);
        }
    
        setEmail(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        if (!isValidEmail(email)) {
            setError(language === 'fr' ? 'Attention, cette adresse mail n\'est pas valide.' : 'Attention, this email is invalid.');
            console.log(error)
        } else {
            setError(null);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={handleChange}></input>
                <button type='submit'>{language === "fr" ? 'ENVOYER' : 'SEND'}</button>
            </form>
            {error && <h2 style={{'color': 'red'}}>{ error }</h2>}
        </div>
    )
}

export default NewsletterForm