import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'


const ExpositionsMenu = () => {
    const language = useLanguage()

    return (
        <div className='exhibitions-menu-container'>
            <NavLink to='/expositions/personnelles'>{language === 'fr' ? 'EXPOSITIONS PERSONNELLES' : 'PERSONNAL EXHIBITIONS'}</NavLink>
            <NavLink to='/expositions/groupees'>{language === 'fr' ? 'EXPOSITIONS GROUPEES' : 'GROUPED EXHIBITIONS'}</NavLink>
        </div>
    )
}

export default ExpositionsMenu