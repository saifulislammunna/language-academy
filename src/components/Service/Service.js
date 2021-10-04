import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const {img,name,price} = props.language
    return (
       
        <div  >
            <div   >
            <CardGroup >
  <Card  className="language-course">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title>Course Name : {name}</Card.Title>
       
      <h4> {price}</h4>
      <Button>Enroll Now</Button> 
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        // <img src={img} className="rounded" alt="" width="400" height="300" />
        // <h3>Course Name:{name}</h3>
        // <h2> {price}</h2>
        // <Button>Enroll Now</Button>
         
    );
};

export default Service;