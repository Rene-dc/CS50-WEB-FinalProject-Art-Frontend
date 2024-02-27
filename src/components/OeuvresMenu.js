import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'


const OeuvresMenu = () => {
    const language = useLanguage()

    return (
        <div className='works-menu-container'>
            <NavLink to='/oeuvres/peintures'>{language === 'fr' ? 'PEINTURES' : 'PAINTINGS'}</NavLink>
            <NavLink to='/oeuvres/gravures'>{language === 'fr' ? 'GRAVURES' : 'ENGRAVINGS'}</NavLink>
        </div>
    )
}

export default OeuvresMenu