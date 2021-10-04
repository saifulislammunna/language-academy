import React, { useEffect, useState } from 'react';
import { Carousel ,Button} from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'
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
             <Carousel fade>
             <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.mondly.com/blog/wp-content/uploads/2020/03/learn-bengali-1.jpg"
      alt="First slide" width="500" height="400"  
    />

    <Carousel.Caption>
      <h3>learn bengali</h3>
      <p>LEARNING BENGALI: FROM BANGLA BEGINNER TO ADVANCED LEARNER</p>
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
                  <h3>learn arabic</h3>
                   <p>This Arabic course contains 100+ Arabic lessons that cover most Arabic grammar and Arabic morphology topics needed to help you learn Arabic quickly.</p>
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
      <h3>best english courses</h3>
      <p>improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
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
      <h3>learn bengali</h3>
      <p>LEARNING BENGALI: FROM BANGLA BEGINNER TO ADVANCED LEARNER</p>
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

export default Home;