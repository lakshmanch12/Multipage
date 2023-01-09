import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ProductCard = props => {
  console.log('product propsss', props)
  const navigate = useNavigate(); 
  // console.log
  const goToHome=(country)=>{
  console.log(country,"jhhhhhhhhhhhhhhhhhh")
  
      navigate(`user/${country}`);
    
    //localhost:3000/user/:id
  }; 
  return (
    <>
      <Card >
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title >{props.data.countryName}</Card.Title>
          {/* <Card.Text style={{color:"black"}}>{props.data.countryName}</Card.Text> */}
        {/* <Card.Button > jsbcksjcb</Card.Button> */}
        <Button type="button"  onClick={()=>goToHome(props.data.countryName )}class="btn btn-primary">view more</Button>
     
       
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;