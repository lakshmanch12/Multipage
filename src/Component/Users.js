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
import { Card,Button } from "react-bootstrap";
import '../App.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Users = () => {
  const navigate = useNavigate(); 
  const goToHome=()=>{
    alert("hi"); 
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
    <div className="row text-center">
      <div className="col-md-11">
          <div className="testimonial mb-1">
         
         <h1>cities</h1>
         </div>
        
         </div>
    <div className="col-md-1">
          <div className="testimonial mt-2 mb-1">
         
          <Button
           onClick={()=>goToHome()}  
           className=" float-right"variant="outline-dark">Back</Button>
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
        </div>
        </div>
         </div>
    <div className='grid-container'>
   {selectedCountry[0].cities.map((eachUser )=>{
    const {id ,name,email,imagelink,about} =eachUser; 
    return (
   
    <article >
   
      <h3>{about}</h3>
      <Card.Img variant="top" src={eachUser.imagelink} />
      <Card.Text style={{color:"black"}}>{eachUser.cityName}</Card.Text>
      <Link to={`/users/${country}/${id}`} key={id}>
      <Button type="button" 
      //  onClick={()=>goToHome()}
       class="btn btn-primary">about</Button>
  </Link>
    </article>

  
    )
    
   }
   )}

</div>

    </div>
  )
}

export default Users