/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Footer() {
    return (
        <div className='footer  navbar justify-content-center bg-primary'>
            <ul className="nav">
                <li className="nav-item hover-link">
                    <a className="nav-link text-white" target='_blank' href="https://www.linkedin.com/in/megan-ellman/" rel="noreferrer" >LinkedIn</a>
                </li>
                <li className="nav-item hover-link">
                    <a className="nav-link text-white" target='_blank' href="https://github.com/megellman" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item hover-link">
                    <a className="nav-link text-white" href={require('../assets/resume.pdf')} download='MeganEllman' >Resume</a>
                </li>
            </ul>
        </div>
    )
};

export default Footer;