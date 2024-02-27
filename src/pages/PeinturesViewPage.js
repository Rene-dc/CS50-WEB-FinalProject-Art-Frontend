import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WorksView from '../components/WorksView'

const PeinturesViewPage = () => {
    const { peintureId } = useParams()
    
    let [oeuvre, setOeuvre] = useState([])
    
    useEffect(() => {
        let getOeuvre = async () => {
            console.log({peintureId})
            let response = await fetch(`/api/works/paintings/${peintureId}`);
            let data = await response.json();
            console.log('DATA:', data);
            setOeuvre(data);
        }

        getOeuvre();
    }, [peintureId])


    return (
        <WorksView oeuvre={oeuvre} />
    )
}

export default PeinturesViewPage