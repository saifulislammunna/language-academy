import React, { useEffect, useState } from 'react';
import { Carousel ,Button} from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'
/* home component */
const Home = () => {
    
  let [languages,setLanguages]  = useState([])
  useEffect(()=>{
    fetch('./languages.JSON')
    .then(res => res.json())
    .then(data => setLanguages(data.slice(0,4)));
  },[])
 
    return (
        <div  >
             <div className="carousel-part">
               {/* carousel added */}
             <Carousel fade>
             <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.mondly.com/blog/wp-content/uploads/2020/03/learn-bengali-1.jpg"
      alt="First slide" width="500" height="400"  
    />

    <Carousel.Caption>
      <h3 className="fw-bolder" >learn bengali</h3>
      <p className="fw-bolder">LEARNING BENGALI: FROM BANGLA BEGINNER TO ADVANCED LEARNER</p>
      <Button className="btn btn-primary">Learn bengali</Button>
    </Carousel.Caption>
  </Carousel.Item>
                <Carousel.Item>
                   <img
                 className="d-block w-100"
                 src="https://www.lcps.ae/wp-content/uploads/2020/09/learn-arabic.jpg"
                 alt="Second slide" width="500" height="400" 
                 />
                 <Carousel.Caption>
                  <h3 className="text-dark">learn arabic</h3>
                   <p className="text-dark fw-bolder">This Arabic course contains 100+ Arabic lessons that cover most Arabic grammar and Arabic morphology topics needed to help you learn Arabic quickly.</p>
                   <Button  className="btn btn-primary" >Learn Arabic</Button>
                 </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                <img
                 className="d-block w-100"
                src="https://www.englishcollege.com/sites/default/files/field/image/best_english_courses_0.jpg"
                  alt="Third slide" width="500" height="400"  
                  />

    <Carousel.Caption>
      <h3 className="fw-bolder">best english courses</h3>
      <p className="fw-bolder">improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
      <Button  className="btn btn-primary" >Learn  English</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.travelchinacheaper.com/wp-content/uploads/75-best-tools-learn-Chinese.jpg"
      alt="Fourth slide" width="500" height="400" 
    />

    <Carousel.Caption>
      <h3 className="text-dark fw-bolder">learn Chinese</h3>
      <p className="text-dark fw-bolder">LEARNING Chinese: FROM Chinese BEGINNER TO ADVANCED LEARNER</p>
      <Button  className="btn btn-primary" >Learn Chinese  </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

             </div>
             <div className="service-part">
             {
               languages.map(language => <Service
               language={language}
               key ={language.name}
               >

               </Service>)
             }
             </div>

        </div>
    );
};
/* exporting home to app.js */
export default Home;