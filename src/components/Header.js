import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Navigation from './Navigation';

function Header() {
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