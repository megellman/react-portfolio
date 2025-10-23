import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import ScrollTop from './components/ScrollTop';



function App() {
  return (
    <BrowserRouter
      basename='/react-portfolio'
      forceRefresh={true}>
      <ScrollTop />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/Contact" exact element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </BrowserRouter>
  );
}
export default App;
