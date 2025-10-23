import React from 'react';

import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='bg-light fixed-top d-flex align-items-center justify-content-between' style={{boxShadow:" rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
            <Link to="/" className='text-dark text-decoration-none' >
                <h1 className='my-0 text-center p-2'>Megan Ellman</h1>
            </Link>
        </div>
    );
}

export default Header;