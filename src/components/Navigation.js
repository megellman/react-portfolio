import React from 'react';

function Navigation({ page, pageChange }) {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className={page === 'AboutMe' ? 'nav-link disabled text-primary': 'nav-link text-secondary'} href="#aboutMe" onClick={() => pageChange('AboutMe')}>About Me</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Contact' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href="#contact" onClick={() => pageChange('Contact')}>Contact</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Portfolio' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href="#portfolio" onClick={() => pageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a className={page === 'Resume' ? 'nav-link disabled text-primary' : 'nav-link text-secondary'} href='#resume' onClick={() => pageChange('Resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Navigation;