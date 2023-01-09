import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import About from "../Component/About";
// import { BrowserRouter } from "react-router-dom";
 
 
function Header() {
  return (

   
     <div>


    <section className="navbar-dark bg-dark header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              {/* <a class="navbar-brand text-white" href="#">Gammy Tours</a> */}
              
               <Link to="/" class="nav-link  text-white">Gammy Tours</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                  <Link to="About" className="nav-link  text-white">About</Link>
                    {/* <a class="nav-link  text-white" href="#about">About<span class="sr-only"></span></a> */}
                  </li>
                  <li className="nav-item">
                  <Link to="Places" className="nav-link  text-white">Places</Link>
                    {/* <a class="nav-link text-white" href="#destinations">Destinations<span class="sr-only"></span></a> */}
                  </li>
                  <li className="nav-item dropdown">
                  {/* <a class="nav-link text-white" href="#places">Places<span class="sr-only"></span></a> */}
                  </li>
                  <li className="nav-item">
                    {/* <a class="nav-link text-white" href="#tourist">Tourists Detail<span class="sr-only"></span></a> */}
                  </li>
                </ul>
                 
              </div>
             </nav>
            </div>
          </div>
        </div>
        </section> 
        
    
 
    </div>
  
  );
}
export default Header;