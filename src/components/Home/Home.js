import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
const Home = () => {
    
  let [languages,setLanguage]  = useState([])
  useEffect(()=>{
    fetch('./languages.JSON')
    .then(res => res.json())
    .then(data => setLanguage(data.slice(0,4)));
  },[])
  // const languages = language.slice(0,3)
    return (
        <div  >
             <div className="first-part">
             <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.lcps.ae/wp-content/uploads/2020/09/learn-arabic.jpg"
      alt="First slide" width="600" height="500"  
    />
    <Carousel.Caption>
      <h3>learn arabic</h3>
      <p>This Arabic course contains 100+ Arabic lessons that cover most Arabic grammar and Arabic morphology topics needed to help you learn Arabic quickly.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.englishcollege.com/sites/default/files/field/image/best_english_courses_0.jpg"
      alt="Second slide" width="600" height="500"  
    />

    <Carousel.Caption>
      <h3>best english courses</h3>
      <p>improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.mondly.com/blog/wp-content/uploads/2020/03/learn-bengali-1.jpg"
      alt="Third slide" width="600" height="500"  
    />

    <Carousel.Caption>
      <h3>learn bengali</h3>
      <p>LEARNING BENGALI: FROM BANGLA BEGINNER TO ADVANCED LEARNER</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

             </div>
             <div className="second-part">
             {
               languages.map(language => <Service
               language={language}
               >

               </Service>)
             }
             </div>

        </div>
    );
};

export default Home;