import React from 'react';

const Service = (props) => {
    const {img,name,price} = props.language
    return (
        <div>
            <img src={img}  alt="" />
            <h1>Name:{name}</h1>
            <p>Price:{price}</p>
        </div>
    );
};

export default Service;