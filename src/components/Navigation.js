import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../custom.css'



function Navigation() {
    const [currentPage, setPage] = useState('About');
    return (
        <div className='col-6 '>
        <ul className="nav justify-content-end">
            <li onClick={() => setPage('About')} >
                <NavLink className={currentPage === 'About' ? 'nav-item p-2 active' : 'nav-item p-2 none'}to="/react-portfolio/">About Me</NavLink>
            </li>
            <li onClick={() => setPage('Portfolio')} >
                <NavLink className={currentPage === 'Portfolio' ? 'nav-item p-2 active' : 'nav-item p-2 none' } to="/Portfolio"  >Portfolio</NavLink>
            </li>
            <li onClick={() => setPage('Contact')} >
                <NavLink className={currentPage === 'Contact' ? 'nav-item p-2 active' : 'nav-item p-2 none' } to="/Contact"  >Contact</NavLink>
            </li>
            <li onClick={() => setPage('Resume')} >
                <NavLink className={currentPage === 'Resume' ? 'nav-item p-2 active' : 'nav-item p-2 none' } to="/Resume"  >Resume</NavLink>
            </li>
        </ul>    
        </div>
        
    )
}

export default Navigation;