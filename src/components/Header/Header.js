 
import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
             
            
             <nav className="custom-style">
                <NavLink  to ="/home">Home</NavLink>
               
                <NavLink  to ="/services">Services</NavLink>
                <NavLink  to ="/about">About</NavLink>
                <NavLink  to ="/chart">Chart</NavLink>
                
            </nav>    
     


             
        </div>
    );
};

export default Header;