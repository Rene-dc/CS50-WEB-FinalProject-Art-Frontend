import React, { useState, useEffect } from 'react'
import ListOeuvre from '../components/ListOeuvre'
import OeuvresMenu from '../components/OeuvresMenu'
import { useLanguage } from '../context/LanguageContext'

const PeinturesListPage = () => {
    const language = useLanguage()
    const [peintures, setPeintures] = useState([])
    const [sortCol, setSortCol] = useState("date")
    const [order, setOrder] = useState("DSC")

    useEffect(() => {
        getPeintures()
        sorting('date')
    }, [])

    const sorting = (col) => {
        setSortCol(col)
        if (order === 'ASC') {
            const sorted = [...peintures].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setPeintures(sorted)
            setOrder('DSC')
        } else if (order === 'DSC') {
            const sorted = [...peintures].sort((a, b) => 
                a[col] < b[col] ? 1 : -1
            );
            setPeintures(sorted)
            setOrder('ASC')
        }

    }


    const getPeintures = async () => {
        let response = await fetch('/api/works/paintings/')
        let data = await response.json()
        console.log('DATA:', data)
        setPeintures(data)
    }

    return (
        <div className='container'>
            <OeuvresMenu />
            <table className='works-list'>
                <thead>
                    <tr>
                        <th onClick={()=>sorting(language === 'fr' ? 'titre' : 'title')} style={{"min-width" : "250px"}}>
                            {language === 'fr' ? 'TITRE' : 'TITLE'}
                            {(sortCol === 'titre' || sortCol === 'title') && order === 'ASC' ? 
                                <button className='up'></button> 
                                : 
                                <button className='down'></button>
                            }
                        </th>
                        <th onClick={()=>sorting('date')}>
                            DATE
                            {sortCol === 'date' && order === 'ASC' ? 
                                <button className='down'></button> 
                                : 
                                <button className='up'></button>
                            }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {peintures.map((peinture, index) => (
                        <ListOeuvre key={index} oeuvre={peinture} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PeinturesListPage