import React, { useState, useEffect } from 'react'
import ListExposition from '../components/ListExposition'
import ExpositionsMenu from '../components/ExpositionsMenu'
import { useLanguage } from '../context/LanguageContext'

const GroupExpositionsListPage = () => {
    const language = useLanguage()
    const [groupExpositions, setGroupExpositions] = useState([])
    const [sortCol, setSortCol] = useState([])
    const [order, setOrder] = useState('DSC')

    useEffect(() => {
        getGroupExpositions()
        sorting('debut')
    }, [])

    const sorting = (col) => {
        setSortCol(col)
        if (order === 'ASC') {
            const sorted = [...groupExpositions].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setGroupExpositions(sorted)
            setOrder('DSC')
        } else if (order === 'DSC') {
            const sorted = [...groupExpositions].sort((a, b) => 
                a[col] < b[col] ? 1 : -1
            );
            setGroupExpositions(sorted)
            setOrder('ASC')
        }

    }

    let getGroupExpositions = async () => {
        let response = await fetch('/api/exhibitions/group-exhibitions')
        let data = await response.json()
        console.log('DATA:', data)
        setGroupExpositions(data)
    }

    return (
        <div className='container'>
            <ExpositionsMenu />
            <div class='table-container'>
                <table className='works-list'>
                    <thead>
                        <tr>
                            <th onClick={()=>sorting('debut')} style={{"min-width": "60px"}}>
                                {language === 'fr' ? 'ANNÉE' : 'YEAR'}
                                {sortCol === 'debut' && order === 'ASC' ? 
                                    <button className='down'></button> 
                                    : 
                                    <button className='up'></button>
                                }
                            </th>
                            <th onClick={()=>sorting(language === 'fr' ? 'titre' : 'title')} style={{"min-width": "120px"}}>
                                {language === 'fr' ? 'TITRE' : 'TITLE'}
                                {(sortCol === 'titre' || sortCol === 'title') && order === 'ASC' ? 
                                <button className='up'></button> 
                                : 
                                <button className='down'></button>
                                }
                            </th>
                            <th onClick={()=>sorting(language === 'fr' ? 'institution' : 'english_institution')} style={{"min-width": "100px"}}>
                                INSTITUTION
                                {(sortCol === 'institution' || sortCol === 'english_institution') && order === 'ASC' ? 
                                <button className='up'></button> 
                                : 
                                <button className='down'></button>
                                }
                            </th>
                            <th onClick={()=>sorting(language === 'fr' ? 'ville' : 'city')} style={{"min-width": "80px"}}>
                                {language === 'fr' ? 'VILLE' : 'CITY'}
                                {(sortCol === 'ville' || sortCol === 'city') && order === 'ASC' ? 
                                <button className='up'></button> 
                                : 
                                <button className='down'></button>
                                }
                            </th>
                            <th onClick={()=>sorting(language === 'fr' ? 'pays' : 'country')} style={{"min-width" : "80px"}}>
                                {language === 'fr' ? 'PAYS' : 'COUNTRY'}
                                {(sortCol === 'pays' || sortCol === 'country') && order === 'ASC' ? 
                                <button className='up'></button> 
                                : 
                                <button className='down'></button>
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupExpositions.map((groupExposition, index) => (
                            <ListExposition key={index} exposition={groupExposition} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GroupExpositionsListPage