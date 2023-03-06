import React from 'react';


function Navigation({ currentPage, pageChange }) {

    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a href="/" 
                onClick={() => pageChange('About Me')}
                className={currentPage === 'About Me' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} 
                >About Me
                </a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'Contact' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href="/contact" onClick={() => pageChange('Contact')}>Contact</a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'Portfolio' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href="/portfolio" onClick={() => pageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'Resume' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href='/resume' onClick={() => pageChange('Resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Navigation;