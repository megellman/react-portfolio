import React, { useState } from 'react';
import Navigation from './Navigation';

//  I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

function Header() {
    const [page, setPage] = useState('AboutMe');
    const pageChange = (page) => setPage(page);
    return (
        <div>
            <h1>Megan Ellman</h1>
            <Navigation page={page} pageChange={pageChange} />
        </div>
    );
}

export default Header;