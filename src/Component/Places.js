import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Places = () => {
  const navigate = useNavigate(); 
  
const goToHome=()=>{
  // alert("hi"); 
  navigate("/");
}; 
  
const goToBack=()=>{
  // alert("hi"); 
  navigate("/About");
};

  return (
    <div>
      
      <div>
    
    <section className="bg-light mt-2" >    
     <div className="container">
     <div className="row">
     <div className="col-sm-1 col-md-1 mb-4">
      <Button  onClick={()=>goToHome()} class=" text-left"variant="outline-dark">Home</Button>
         </div>
         <div className="col-sm-11 col-md-11 mb-4">
         <div style={{float: 'right'}}>
      <Button onClick={()=>goToBack()}  className=" float-right"variant="outline-dark">Back</Button>
      </div>
         </div>
         </div>
     <div class="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center  text-secondary">About Places </h3>
         </div>
     
      <div class="row text-center">
     
       
        <div className="col-md-5">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="http://listtoday.org/wallpaper/2015/11/list-of-famous-places-7-free-wallpaper.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">London</h4>
          {/* <h6 class="font-weight-bold blue-text my-3">C E O</h6> */}
          <p className="font-weight-normal dark-grey-text">
          From the modern London Eye to the historic Tower of London, the top 10 tourist attractions in London are a must-see on any London sightseeing trip. Even better,
           many London landmarks are free to visit. Use the London attractions map to find them all..</p>
        </div>
      </div>
 
     
      <div className="col-md-7">
        <div className="testimonial mb-5">
         
          {/* <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4> */}
          {/* <h6 class="font-weight-bold blue-text my-3">Toursit</h6> */}
          <p className="font-weight-normal dark-grey-text">
          There are also plenty of kid-friendly places to visit in London.
           Get up close and personal with underwater creatures at SEA LIFE London Aquarium or explore the Science Museum,
            London's interactive hub of science and technology. 
          Both are perfect for fun family days out in London.

You could also soak up some culture at London museums,
 visit Buckingham Palace, or take the perfect picture with Big Ben,
  just some of the many iconic places to go in London.</p>
  <p class="font-weight-normal dark-grey-text">
  The top 10 free London attractions list is based on visitor numbers: start your sightseeing in London now with these popular spots.
   Book tickets with visitlondon.com for the top 10 bookable London attractions.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    
   

      
       </div>
  )
}

export default Places