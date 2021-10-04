import React from 'react';
import './Footer.css'
const Footer = () => {
    var footerStyle = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
      }
    return (
      <div >
                <div style={{footerStyle}}/> 
        <div className="footer ">
            <p>COPYRIGHT © 2021 LC</p>
        </div>
      </div>
    );
};

export default Footer;