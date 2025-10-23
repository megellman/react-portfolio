import React from 'react';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='fixed-top bg-white d-flex align-items-center justify-content-between' style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, .1)" }}>
            <Navigation />
            <Link to="/" className='text-dark text-decoration-none'>
                <h1 className='my-0 text-center p-2'>Megan Ellman</h1>
            </Link>
        </div>
    );
}

export default Header;