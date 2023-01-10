import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from "../data.json";
import{Link} from 'react-router-dom';
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { IoAirplaneSharp,IoArrowBack } from 'react-icons/io5';
import { FiAlignJustify } from "react-icons/fi";
// import { Lightbox } from 'react-lightbox-pack'; 


const UserDetails = () => {
  const navigate = useNavigate(); 
  const goToHome=()=>{
    // alert("hi"); 
    navigate("/");
  };
  const goToBack=(country)=>{
    // alert("hi"); 
    navigate(`/user/${userId.country}`);
  };

    const userId= useParams();
let id =  parseInt(userId.userId);
    let selectedCountry = usersData.countries.filter(i=> i.countryName == userId.country)
    // let selectedCity = selectedCountry[0].cities.filter(i=> i.id == userId.userId)
    // console.log('selected city', selectedCity)
    const selectedCity = selectedCountry[0].cities.find((eachUser) => eachUser.id===id);
  return  (
    <div>
    <div className="row  ">
    <div className="col-md-1 mt-3">
    <img src={selectedCity.imagelink1} class="rounded-circle z-depth-1 img-fluid"/>
         </div>
      <div className="col-md-10">
          <div className="testimonial mt-5 ">
          <h1><span  >Beauty of </span><span class="text-uppercase float-right" style={{color: "red"}}>{selectedCity.cityName}</span>  </h1>
         {/* <h1>{userId.country}<span></span> cities </h1> */}
         </div>
        
         </div>
    <div className="col-md-1">
          <div className="testimonial mt-5  ">
         
          <Button
           onClick={()=>goToBack()}  
           className=" float-right"variant="outline-dark"><IoArrowBack/></Button>
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
        </div>
        </div>
        <div class="row mt-4">
    <div className="col-md-2">
    <Button onClick={()=>goToBack()}  className=" float-right btn-lg"variant="outline-dark">HOTELS <span></span><FiAlignJustify/></Button> 
    {/* <button type="button" className=" float-right"variant="outline-dark">Large button</button> */}
         </div>
         <div className="col-md-2">
         <Button   className=" float-right btn-lg"variant="outline-dark">TRAVELS<span></span> <IoAirplaneSharp/></Button> 
         </div>
         <div className="col-md-2">
         <Button onClick={()=>goToBack()}  className=" float-right btn-lg"variant="outline-dark">FOODES <span></span><FiAlignJustify/></Button> 
         </div> 
         <div className="col-md-2">
         <Button onClick={()=>goToBack()}  className=" float-right btn-lg"variant="outline-dark">THINGS TO DO <span></span><FiAlignJustify/></Button> 
         </div>
         <div className="col-md-2">
         <Button onClick={()=>goToBack()}  className=" float-right btn-lg"variant="outline-dark">HOLIDAYS <span></span><FiAlignJustify/></Button> 
         </div>
         <div className="col-md-2">
         <Button onClick={()=>goToBack()}  className=" float-right btn-lg"variant="outline-dark">HOLIDAYS <span></span><FiAlignJustify/></Button> 
         </div>
      
         </div>
         <div class="row mt-4 float-right">
    <div className="col-md-6">
    <h1 class="text-bold mt-2  " >{selectedCity.caption}</h1>
    <p class="text-bold mt-2  " >{selectedCity.caption}</p>

      </div>
      </div>
      <div>
      <h1>Therichpost.com</h1>
      <div class="gallery-wrapper">
     
        <div class="image-wrapper">
          <a href="#Images/banner-1.jpg">
          <img className="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
            <div class="image-title">Cat staring at me</div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-2">
          <img className="d-block w-100" src="Images/t-2.jpg" alt="First slide" style={{height:"auto"}}/>
            <div class="image-title">Cat playing with mouse</div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-3">
            <img src="assets/photo3small.jfif" alt="" />
            <div class="image-title">Cat turns away</div>
          </a>
        </div>
      </div>
      <div class="gallery-lightboxes">
        
        <div class="image-lightbox" id="lightbox-image-1">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-3" class="arrow-left"></a>
            <a href="#lightbox-image-2" class="arrow-right"></a>
            <img src="assets/photo1big.jfif" alt="" />
            <div class="image-title">Cat staring at me</div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-2">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-1" class="arrow-left"></a>
            <a href="#lightbox-image-3" class="arrow-right"></a>
            <img src="assets/photo2big.jfif" alt="" />
            <div class="image-title">Cat playing with mouse</div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-3">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#ig-3.jpg" class="arrow-left"></a>
            <a href="#lightbox-image-1" class="arrow-right"></a>
            <img src="assets/photo3big.jfif" alt="" />
            <div class="image-title">Cat turns away</div>
          </div>
        </div>
        
      </div>
    </div>
      <div class="row mt-1 float-right">
      <div className="col-md-1">
    

      </div>
    <div className="col-md-10">
    <p>{selectedCity.description}</p>
    <p class="text-bold mt-2  " >{selectedCity.caption}</p>

      </div>
      </div>
    
   

  </div>
       
        
  )

  
}
export default UserDetails ;