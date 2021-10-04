import React from 'react';
import './Footer.css'
/* footer component */
const Footer = () => {
    var footerStyle = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
      }
    return (
      <div >
                <div   style={{footerStyle}}/> 
        <div className="footer ">
            <p>COPYRIGHT © 2021 LC</p>
        </div>
      </div>
    );
};
/* exporting footer to app.js */
export default Footer;