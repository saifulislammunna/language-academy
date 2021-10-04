import React from 'react';
import './Service.css'
const Service = (props) => {
    const {img,name,price} = props.language
    return (
        <div className="language-course">
            <img src={img} className="rounded" alt="" />
            <h1>Name:{name}</h1>
            <p>Price:{price}</p>
        </div>
    );
};

export default Service;