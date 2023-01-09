import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from "../data.json";
import{Link} from 'react-router-dom';
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

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
    <div>
    <div> 
    <section className="bg-light mt-5" id="tourist">
    <div className="container">
    <div className="row text-center">
    <div className="col-md-11">
          <div className="testimonial mb-1">
         
          <h1>{selectedCity.cityName}</h1>
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
        
         </div>
         <div className="col-md-1">
          <div className="testimonial mb-1">
         
          <Button onClick={()=>goToBack()}  className=" float-right"variant="outline-dark">Back</Button>
        
         {/* <Link to={`/users/${id}`} key={id}> */}
         </div>
        
         </div>
         <p>{selectedCity.description}</p>
         </div>
         </div>
  </section>
      
      <Button onClick={()=>goToHome()}  className=" float-right"variant="outline-dark">Home</Button>
  {/* </Link> */}

         </div>
         </div>
  )
  
}
export default UserDetails ;