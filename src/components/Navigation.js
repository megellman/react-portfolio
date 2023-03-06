import React from 'react';

function Navigation({ page, pageChange }) {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className={page === 'AboutMe' ? 'nav-link': 'nav-link disabled'} href="#aboutMe" onClick={() => pageChange('AboutMe')}>About Me</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Contact' ? 'nav-link' : 'nav-link disabled'} href="#contact" onClick={() => pageChange('Contact')}>Contact</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Portfolio' ? 'nav-link' : 'nav-link disabled'} href="#portfolio" onClick={() => pageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Resume' ? 'nav-link' : 'nav-link disabled'} href='#resume' onClick={() => pageChange('Resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Navigation;