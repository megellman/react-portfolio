/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Footer() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://www.linkedin.com/in/megan-ellman/" >LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://github.com/megellman">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-secondary" target='_blank' href="https://stackexchange.com/users/27213381/megan-ellman">Stack Overflow</a>
                </li>
            </ul>
        </div>
    )
};

export default Footer;