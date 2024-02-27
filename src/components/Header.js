import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='' className='home'>
                <h3>MY ART PROJECT</h3>
            </NavLink>
        </div>
    )
}

export default Header