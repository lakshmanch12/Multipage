import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from "../data.json";
import{Link} from 'react-router-dom';
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../App.css';


const UserDetails = () => {
  const navigate = useNavigate(); 
  const goToHome=()=>{
    alert("hi"); 
    navigate("/");
  };
  const goToBack=(country)=>{
    alert("hi"); 
    navigate(`/user/${userId.country}`);
  };

    const userId= useParams();
let id =  parseInt(userId.userId);
    let selectedCountry = usersData.countries.filter(i=> i.countryName == userId.country)
    // let selectedCity = selectedCountry[0].cities.filter(i=> i.id == userId.userId)
    // console.log('selected city', selectedCity)
    const selectedCity = selectedCountry[0].cities.find((eachUser) => eachUser.id===id);
  return  (
    
    // <div className='grid-container'>
    <div>
    <div> 
    <section className="bg-light mt-1" >
    <div className="container">
    <div className="row">
    <div className="col-md-2">
          <div className="testimonial mb-1">
          {/* <h1>{selectedCity.cityName}</h1> */}
          <div className="avatar mx-auto">
            <img src={selectedCity.imagelink1} class="rounded-circle z-depth-1 img-fluid"/>
             <h1>{selectedCity.cityName}</h1>
          </div>
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
         </div>
         <div className="col-md-9">
          <div className="testimonial mb-1">
          {/* <h1>{selectedCity.cityName}</h1> */}
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
         </div>
         <div className="col-md-1">
          <div className="testimonial mb-1">
      
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         <Button onClick={()=>goToBack()}  className=" float-right"variant="outline-dark">Back</Button>
         </div>
         </div>
         
         {/* <Card.Img variant="top"   src={selectedCity.imagelink} /> */}
         </div>
         <p>{selectedCity.description}</p>
         </div>
  </section>
      
      <Button onClick={()=>goToHome()}  className=" float-right"variant="outline-dark">Home</Button>
  {/* </Link> */}

         </div>
         </div>
        //  </div>
  )
  
}
export default UserDetails ;