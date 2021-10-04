import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
/* services component */
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
                key ={language.name}
              
               >

               </Service>)
             }
        </div>
    );
};
/* exporting services component */
export default Services;