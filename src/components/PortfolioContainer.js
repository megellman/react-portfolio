import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from  './Footer';

export default function PortfolioContainer() {
    const [page] = useState('AboutMe');

    const renderPage = () => {
        if (page === 'AboutMe') {
            return <AboutMe />;
        }
        if (page === 'Contact') {
            return <Contact />;
        }
        if (page === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    // const pageChange = (page) => setPage(page);

    return (
        <div>
            <Header />
            {renderPage()}
            <Footer />
        </div>
    );
}