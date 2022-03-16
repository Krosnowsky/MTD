import React from 'react';
import {Route ,Routes} from 'react-router-dom';
import '../Styles/Pages.css';

import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Publication from '../Pages/Publication';
import Contact from '../Pages/Contact';
const Pages = () => {
    return ( 
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/publication" element={<Publication/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

        </>
     );
}
 
export default Pages;