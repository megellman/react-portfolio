import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../custom.css'



function Navigation() {
    const [currentPage] = useState('About');

    return (
        <div className='col-6'>
        <ul className="nav justify-content-end">
            <li  className={currentPage === 'About' ? 'nav-item p-2 active' : 'nav-item p-2 none'}>
                <NavLink style={{'textDecoration': 'none'}} to="/react-portfolio/">About Me</NavLink>
            </li>
            <li  className={currentPage === 'Portfolio' ? 'nav-item p-2 active' : 'nav-item p-2 none' }>
                <NavLink style={{'textDecoration': 'none'}} to="/Portfolio"  >Portfolio</NavLink>
            </li>
            <li className={currentPage === 'Contact' ? 'nav-item p-2 active' : 'nav-item p-2 none' }>
                <NavLink style={{'textDecoration': 'none'}} to="/Contact"  >Contact</NavLink>
            </li>
            <li  className={currentPage === 'Resume' ? 'nav-item p-2 active' : 'nav-item p-2 none' }>
                <NavLink style={{'textDecoration': 'none'}} to="/Resume"  >Resume</NavLink>
            </li>
        </ul>    
        </div>
        
    )
}

export default Navigation;