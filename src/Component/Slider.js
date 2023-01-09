import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import axios from "axios"; 
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      countries: []
    };
    // console.log("??????????",data.product)
  }
  
  componentDidMount() {
    axios.get("http://localhost:4001/countries")
      .then(res => res.data)
      .then(
        (result) => {
          console.log("////////////////////",result);
          this.setState({
            isLoaded: true,
            countries: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      Default: '50px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      
      <div>
        <h2> Favourite Destinations</h2>
        <Slider {...settings}>
          {this.state.countries.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.imagelink}  data={slide}/>
        {/* <Link to={{ pathname: `/productdetails/${index.imagename}/${u.id}`,state:{product:u}}} className="nav-link" role="button">Viwe Details</Link> */}

              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
