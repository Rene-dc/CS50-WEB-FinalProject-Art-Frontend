import React from 'react'
import { useLanguage } from '../context/LanguageContext'


const WorksView = ({oeuvre}) => {
    const language = useLanguage()

    return (
        <div className='work-view'>
            <img src={oeuvre.image} alt={language === 'fr' ? oeuvre.titre : oeuvre.title} className='oeuvre'></img>
            <div className='description'>
                <h3>{language === 'fr' ? oeuvre.titre : oeuvre.title}</h3>
                <p>{language === 'fr' ? oeuvre.technique : oeuvre.english_technique}</p>
                <p>{oeuvre.annee}</p>
                <p>{oeuvre.largeur} * {oeuvre.hauteur}cm</p>
            </div>
        </div>
    )
}

export default WorksView