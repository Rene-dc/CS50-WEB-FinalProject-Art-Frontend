import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import { Outlet } from "react-router-dom";

const Root = () => {
    const [isDisplay, setIsDisplay] = useState('yes')
    const [hamburgerOpen, setHamburgerOpen] = useState('no')
    const handleClick = () => {
        isDisplay === 'yes' ? setIsDisplay('no') : setIsDisplay('yes')
        hamburgerOpen === 'no' ? setHamburgerOpen('yes') : setHamburgerOpen('no')
    }

    return (
        <div className='root-container'>
            <div className='hamburger-bar'>
                <button onClick={() => handleClick()} className={hamburgerOpen === 'no' ? 'hamburger close' : 'hamburger open'}></button>
            </div>
            <Header />
            <Menu display={ isDisplay } setDisplay={ handleClick }/>
            <Outlet />
        </div>
    )
}

export default Root