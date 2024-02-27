import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage, useLanguageUpdate } from '../context/LanguageContext'

const Menu = ({ display, setDisplay }) => {
    const language = useLanguage()
    const changeLanguage = useLanguageUpdate()

    return (
        <nav className={display === 'yes' ? 'menu hidden' : 'menu show'}>
            <NavLink to='/expositions/personnelles' onClick={() => setDisplay()}>{language === 'fr' ? 'EXPOSITIONS' : 'EXHIBITIONS'}</NavLink>
            <NavLink to='/oeuvres/peintures' onClick={() => setDisplay()}>{language === 'fr' ? 'OEUVRES' : 'WORKS'}</NavLink>
            <NavLink to='/biographie' onClick={() => setDisplay()}>{language === 'fr' ? 'BIOGRAPHIE' : 'BIOGRAPHY'}</NavLink>
            <NavLink to='/contact' onClick={() => setDisplay()}>CONTACT</NavLink>
            <div className='language'>
                <button className={language === 'fr' ? 'active-language' : 'inactive-language'} onClick={() => changeLanguage('fr')}>FR</button>
                <p> /  </p>
                <button className={language === 'en' ? 'active-language' : 'inactive-language'} onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </nav>
    )
}

export default Menu