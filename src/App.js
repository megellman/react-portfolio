import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter 
    basename='/react-portfolio'
    forceRefresh={true}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>

    </BrowserRouter>
  );
}
export default App;
