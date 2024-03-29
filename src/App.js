import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter 
    basename='/react-portfolio'
    forceRefresh={true}>
      <div>
        <Header />
        <Footer />
      </div>
    <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/resume" exact element={<Resume />} />
    </Routes>  
    </BrowserRouter>
  );
}
export default App;
