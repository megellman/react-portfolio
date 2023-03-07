import React from 'react';
import { NavLink } from "react-router-dom";
import '../custom.css'



function Navigation() {

    return (
        <div className='col-6'>
        <ul className="nav justify-content-end">
            <li className='nav-item p-2'>
                <NavLink to="/" className="none">About Me</NavLink>
            </li>
            <li className='nav-item p-2'>
                <NavLink to="/Portfolio"  className="none" >Portfolio</NavLink>
            </li>
            <li className="nav-item p-2">
                <NavLink to="/Contact"  className="none" >Contact</NavLink>
            </li>
            <li className='nav-item p-2'>
                <NavLink to="/Resume"  className="none" >Resume</NavLink>
            </li>
        </ul>    
        </div>
        
    )
}

export default Navigation;