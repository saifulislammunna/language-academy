 
import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css'
/* header component */
const Header = () => {
    return (
        <div  className="header">
             
            
             <nav  >
                <NavLink  to ="/home">Home</NavLink>
               
                <NavLink  to ="/services">Services</NavLink>
                <NavLink  to ="/about">About</NavLink>
                <NavLink  to ="/chart">Chart</NavLink>
                
            </nav>    
     


             
        </div>
    );
};
/* exporting header to app.js */
export default Header;