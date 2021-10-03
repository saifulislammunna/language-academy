import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             
            
             <nav className="custom-style">
                <NavLink  to ="/home">Home</NavLink>
                <NavLink  to ="/about">About</NavLink>
                <NavLink  to ="/services">Services</NavLink>
                
            </nav>     
             
        </div>
    );
};

export default Header;