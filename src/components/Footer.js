/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Footer() {
    return (
        <div className='footer navbar justify-content-center'>
            <ul className="nav ">
                <li className="nav-item hover-link">
                    <a className="nav-link  text-secondary" target='_blank' href="https://www.linkedin.com/in/megan-ellman/" >LinkedIn</a>
                </li>
                <li className="nav-item hover-link">
                    <a className="nav-link  text-secondary" target='_blank' href="https://github.com/megellman">GitHub</a>
                </li>
            </ul>
        </div>
    )
};

export default Footer;