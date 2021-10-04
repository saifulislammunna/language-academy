import React from 'react';
import './Service.css'
const Service = (props) => {
    const {img,name,price} = props.language
    return (
       
        <div className="language-course  ">
            <img src={img} className="rounded" alt="" width="400" height="300" />
            <h3>Course Name:{name}</h3>
            <h2> {price}</h2>
            
        </div>
         
    );
};

export default Service;