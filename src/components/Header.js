import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2>Megan Ellman</h2>
            <div >
                <  Navigation />
            </div>
        </div>
    );
}

export default Header;