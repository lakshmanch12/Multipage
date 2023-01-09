import React from 'react';
import Content from "./Content";
import Contacts from "./Slider";
import StarRating from "./submit";
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Content/>
       < Contacts/>
       <StarRating/>
       <Outlet/>


    </div>
  )
}

export default Home