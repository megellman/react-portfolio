import React from 'react';
import { NavLink } from "react-router-dom";
import '../custom.css'



function Navigation() {
    return (
        <div className='col-6 '>
        <ul className="nav justify-content-end">
            <li>
                <NavLink 
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "darkorchid" : "black",
                        textDecorationLine: "none",
                        marginRight: "10px"
                    }
                }}
                to="/react-portfolio"
                end>
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink 
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "darkorchid" : "black",
                        textDecorationLine: "none",
                        marginRight: "10px"
                    }
                }}
                to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink 
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "darkorchid" : "black",
                        textDecorationLine: "none",
                        marginRight: "10px"
                    }
                }}
                to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink 
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "darkorchid" : "black",
                        textDecorationLine: "none",
                        marginRight: "10px"
                    }
                }}
                to="/resume">Resume</NavLink>
            </li>
        </ul>    
        </div>
        
    )
}

export default Navigation;