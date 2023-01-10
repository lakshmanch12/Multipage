// import React, { Component } from "react";
// import Slider from "react-slick";
// // import ProductCard from "./product";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../App.css";
// import axios from "axios"; 
// import { Card, Button } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// const ProductCard = props => {
//   const navigate = useNavigate(); 
//   const goToDyanh=()=>{
//     alert("hdddddddddddddddi"); 
//     navigate("/");
//   }; 
//   return (
//     <>
//       <Card >
//         <Card.Img variant="top" src={props.imgSrc} />
//         <Card.Body>
//           <Card.Title >{props.data.imagename}</Card.Title>
//           <Card.Text style={{color:"black"}}>{props.data.about}</Card.Text>
//         {/* <Card.Button > jsbcksjcb</Card.Button> */}
//         <Button type="button"  onClick={()=>goToDyanh()}class="btn btn-primary">view</Button>
       
//         </Card.Body>
//       </Card>
//     </>
//   );
// };
// class ProductSlider extends Component {
//   constructor() {
//     super();
//     this.state = {
//       error: null,
//       isLoaded: false,
//       product: []
//     };
//     // console.log("??????????",data.product)
//   }
  
//   componentDidMount() {
//     axios.get("http://localhost:4001/screen")
//       .then(res => res.data)
//       .then(
//         (result) => {
//           console.log("////////////////////",result);
//           this.setState({
//             isLoaded: true,
//             product: result
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     var settings = {
//       dots: false,
//       infinite: false,
//       speed: 600,
//       slidesToShow: 5,
//       // slidesToScroll: 1,
//       initialSlide: 0,
//       arrows:false,
//       Default: '50px',
//       // responsive: [
//       //   {
//       //     breakpoint: 1024,
//       //     settings: {
//       //       slidesToShow: 3,
//       //       slidesToScroll: 1,
//       //       infinite: true,
//       //       dots: true
//       //     }
//       //   },
//       //   {
//       //     breakpoint: 768,
//       //     settings: {
//       //       slidesToShow: 2,
//       //       slidesToScroll: 2,
//       //       initialSlide: 1
//       //     }
//       //   },
//       //   {
//       //     breakpoint: 640,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1
//       //     }
//       //   }
//       // ]
//     };
//     return (
      
//       <div>
//         <h2> india</h2>
//         <Slider {...settings}>
//           {this.state.product.map((card, index) => {
//             return (
//               <div key={index}>
//                 <ProductCard imgSrc={card.imagelink}  data={card}/>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }

// export default ProductSlider;
import React from 'react';
import{Link} from 'react-router-dom';
// import axios from 'axios';
import usersData from "../data.json";
import { Card,Button,Container } from "react-bootstrap";
import '../App.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoAirplaneSharp,IoArrowBack } from 'react-icons/io5';
const Users = () => {
  const navigate = useNavigate(); 
  const goToHome=()=>{
    // alert("hi"); 
    navigate("/");
  };
  const userId= useParams();
    console.log('userId ...........',usersData, userId)
 let  country= userId.country
 let selectedCountry = usersData.countries.filter(i=> i.countryName == userId.country)
 console.log('selcted countries', selectedCountry)
  return (
    <div>
      <div className="container">
    <div className="row ">
    <div className="col-md-1">
          {/* <div className="testimonial mt-2 "> */}
          {/* <img src={eachUser.imagelink}class="rounded-circle z-depth-1 img-fluid"/> */}
         {/* <h1>{userId.country}<span></span> cities </h1> */}
         {/* </div> */}
        
         </div>
      <div className="col-md-10">
          <div className="testimonial mt-2 ">
          <h1><span class="text-uppercase float-right" >{userId.country}</span> <span  style={{color: "red"}}>CITIES</span> </h1>
         {/* <h1>{userId.country}<span></span> cities </h1> */}
         </div>
        
         </div>
    <div className="col-md-1">
          <div className="testimonial mt-3  ">
         
          <Button
           onClick={()=>goToHome()}  
           className=" float-right"variant="outline-dark"><IoArrowBack/></Button>
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
        </div>
        </div>
         </div>
         {/* <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Japan</h4>
                          <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 </div> */}
        
    <div className='row'>
   {selectedCountry[0].cities.map((eachUser )=>{
    const {id ,name,email,imagelink,about} =eachUser; 
    const selectedCity = selectedCountry[0].cities.find((eachUser) => eachUser.id===id);
    return (
      <Container fluid="md-4 " >
      <Row className=" mt-5  mb-5 bg-secondary">
      <Col md={1}>
        
       <div class=" mt-2">
       {/* <h3>{about}</h3> */}
      {/* <img class="card-img-top" src={eachUser.imagelink} /> */}
     {/* <Card.Title  class=" mt-2 card-title text-dark-emphasis" >{eachUser.cityName}</Card.Title> */}
    {/* </div> */}
     </div>
        </Col>
        <Col md={4}>
        <div className=" ">
            <img src={eachUser.imagelink}class="rounded-circle z-depth-1 img-fluid"/>
             <h1 classname=''>{selectedCity.cityName}</h1>
          </div>
{/*      
       <div class=" mt-2">
       <h3>{about}</h3>
      <img class="card-img-top" src={eachUser.imagelink} />
    
  
     </div> */}
        </Col>
        <Col sm={5} >
        {/* <Card.Title  class=" mt-2 card-title text-dark-emphasis" >{eachUser.cityName}</Card.Title>  */}
        <h1 class="text-bold mt-2  " >{selectedCity.caption}</h1>
        <p class="text-bold mt-3 " >{selectedCity.About}</p>

        <Link to={`/users/${country}/${id}`} key={id}>
      <Button type="button" 
       onClick={()=>goToHome()}
      className='mb-2 btn btn-primary'> More About</Button>
   </Link>
        </Col>
      </Row>
      
      {/* <h6>Read More <i class="fas fa-arrow-right"></i></h6> */}
    </Container>
    

//       <Container fluid="md">
//       <div class="row">
//       <div class="col-md-3 mb-2">
//       <div class="card mt-2">
//       <h3>{about}</h3>
//       <i mg class="card-img-top" src={eachUser.imagelink} />
//       <Card.Title  class=" mt-2 card-title text-dark-emphasis" >{eachUser.cityName}</Card.Title>
//       </div>
//       </div>
//       <div class="col-md-9  mt-5 mb-2">
      
//       <p class="card-text text-secondary" >{selectedCity.About}</p>
                       
    
//       <Link to={`/users/${country}/${id}`} key={id}>
//       <Button type="button" 
//       //  onClick={()=>goToHome()}
//        className='mb-2 btn btn-primary'>about</Button>
//   </Link>
//  </div>
//   </div>
    
//   </Container>


    )})}

</div>

    </div>
  )
}

export default Users