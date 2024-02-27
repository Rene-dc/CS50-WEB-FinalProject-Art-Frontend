import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const ListExposition = ({exposition}) => {
    const language = useLanguage()

    return (
        <tr key={exposition.id}>
            <td>{exposition.debut.slice(0,4)}</td>
            <td>{language === 'fr' ? exposition.titre : exposition.title}</td>
            <td>{language === 'fr' ? exposition.institution : exposition.english_institution}</td>
            <td>{language === 'fr' ? exposition.ville : exposition.city}</td>
            <td>{language === 'fr' ? exposition.pays : exposition.country}</td>
        </tr>
    )
}

export default ListExposition