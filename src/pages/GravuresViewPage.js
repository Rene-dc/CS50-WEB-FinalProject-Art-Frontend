import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WorksView from '../components/WorksView'

const GravuresViewPage = () => {
    const { gravureId } = useParams()
    
    let [oeuvre, setOeuvre] = useState([])
    
    useEffect(() => {
        let getOeuvre = async () => {
            console.log({gravureId})
            let response = await fetch(`/api/works/paintings/${gravureId}`);
            let data = await response.json();
            console.log('DATA:', data);
            setOeuvre(data);
        }

        getOeuvre();
    }, [gravureId])


    return (
        <WorksView oeuvre={oeuvre} />
    )
}

export default GravuresViewPage