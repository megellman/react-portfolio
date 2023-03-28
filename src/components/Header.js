import React from 'react';
import Navigation from './Navigation';

function Header() {
    console.log(Date(1676948737748).toLocaleString("en-us"));
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                <h2 className='mr-5'>Megan Ellman</h2>
                </div>
                <Navigation />
            </div>
        </div>
    );
}

export default Header;