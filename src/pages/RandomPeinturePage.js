import React, { useState, useEffect } from 'react'
import WorksView from '../components/WorksView'

const RandomPeinturePage = () => {

    let [randomPeinture, setRandomPeinture] = useState([])

    useEffect(() => {
        getRandomPeinture()
    }, [])

    let getRandomPeinture = async () => {
        let response = await fetch('/api/works/random-painting/')
        let data = await response.json()
        console.log('DATA:', data)
        setRandomPeinture(data)
    }

    return (
        <WorksView oeuvre={randomPeinture}/>
    )
}

export default RandomPeinturePage