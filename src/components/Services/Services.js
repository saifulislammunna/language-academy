import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [languages, setLanguages] = useState([]);
 
 useEffect(()=>{
   fetch('./languages.JSON')
   .then(res => res.json())
   .then(data => setLanguages(data));
 },[])
    return (
        <div className="languages-container">
             {
               languages.map(language => <Service
               language={language}
               >

               </Service>)
             }
        </div>
    );
};

export default Services;