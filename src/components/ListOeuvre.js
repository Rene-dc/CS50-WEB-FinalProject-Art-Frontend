import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'


const ListOeuvre = ({oeuvre}) => {
    const language = useLanguage()
    return (
        <tr key={oeuvre.id}>
            <td>
                <NavLink to={`/oeuvres/peintures/${oeuvre.id}`} className='list-oeuvre-item'>
                    {language === 'fr' ? oeuvre.titre : oeuvre.title}
                </NavLink>
            </td>
            <td>
                <NavLink to={`/oeuvres/peintures/${oeuvre.id}`} className='list-oeuvre-item'>
                    {oeuvre.annee}
                </NavLink>
            </td>
        </tr>
    )
}

export default ListOeuvre

