// import React, { useState } from 'react';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Header from './Header';
// import Footer from  './Footer';

// export default function PortfolioContainer() {
//     const [page] = useState('About Me');

//     const renderPage = () => {
//         if (page === 'About Me') {
//             return <About />;
//         }
//         if (page === 'Contact') {
//             return <Contact />;
//         }
//         if (page === 'Portfolio') {
//             return <Portfolio />;
//         }
//         return <Resume />;
//     };

//     return (
//         <div>
//             <Header />
//             <h2>{page}</h2>
//             {renderPage()}
//             <Footer />
//         </div>
//     );
// }