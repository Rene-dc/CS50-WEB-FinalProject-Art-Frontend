import React from 'react'
import NewsletterForm from '../components/NewsletterForm'
import { useLanguage } from '../context/LanguageContext'

const ContactPage = () => {
    const language = useLanguage()
    return (
        <div className='contact-container'>
            {language === 'fr' ? 
                <p>Pour toute demande, merci de me contacter à cette adresse:</p>
                :
                <p>For any question, please contact me at this adress:</p>
            }
            <a href='mailto:jonathaninizan@protonmail.com'>jonathaninizan@protonmail.com</a>
            
            {language === 'fr' ? 
                <p>Si vous souhaitez recevoir ma newsletter, vous informant des expositions et nouvelles de l’atelier, veuillez me laisser votre adresse mail ici :</p>
                :
                <p>If you wish to receive my newsletter, informing you about exhibitions and news of the studio, please leave your email adress here:</p>
            }
            <NewsletterForm />
        </div>
    )
}

export default ContactPage