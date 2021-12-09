import React from "react";
import "./Main.css";
import Title from "../../components/Title";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import kate from "./images/Kate.jpg";
import kate2 from "./images/Kate2.jpg";
import kate4 from "./images/Kate4.jpg";
import kate6 from "./images/Kate6.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "../../components/slideshow/Slide";
import Slider from "../../components/slideshow/Slider";
import SliderContent from "../../components/slideshow/SliderContent";



function Main (){
  return (
    <div className="Container">


      <Navbar />

    
      <SliderContent />


      <Footer />

  </div>
)
}



export default Main;
