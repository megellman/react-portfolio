import React, { useState } from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      console.log('**********')
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
    return <Resume />;
    }
  };

  const pageChange = (page) => {
    setCurrentPage(page);
    console.log('page is ', currentPage)
  }

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} pageChange={pageChange} />
      <h2>{currentPage}</h2>
      {renderPage()}
      <Footer />
    </div>
  );
}
export default App;
