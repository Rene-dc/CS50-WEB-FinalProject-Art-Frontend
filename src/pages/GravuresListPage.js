import React, { useState, useEffect } from 'react'
import ListOeuvre from '../components/ListOeuvre'
import OeuvresMenu from '../components/OeuvresMenu'
import { useLanguage } from '../context/LanguageContext'

const GravuresListPage = () => {
    const language = useLanguage()
    const [gravures, setGravures] = useState([])
    const [sortCol, setSortCol] = useState([])
    const [order, setOrder] = useState("DSC")

    useEffect(() => {
        getGravures()
        sorting('date')
    }, [])

    const sorting = (col) => {
        setSortCol(col)
        if (order === 'ASC') {
            const sorted = [...gravures].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setGravures(sorted)
            setOrder('DSC')
        } else if (order === 'DSC') {
            const sorted = [...gravures].sort((a, b) => 
                a[col] < b[col] ? 1 : -1
            );
            setGravures(sorted)
            setOrder('ASC')
        }

    }

    let getGravures = async () => {
        let response = await fetch('/api/works/engravings/')
        let data = await response.json()
        console.log('DATA:', data)
        setGravures(data)
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
                    {gravures.map((gravure, index) => (
                        <ListOeuvre key={index} oeuvre={gravure} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GravuresListPage