import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Navigation from "./Navigation";
import slider1 from "../../assets/images/service-slider-1.png";
import location_icon from "../../assets/images/ic-location.png";

function Slider3() {

  const slides = [
    {
      id: 1,
      image: slider1,
      title: "myWO - Toulon",
      address: "17 Littoral Frederic Mistral, Le Mourillon, 83000",
    },
    {
      id: 1,
      image: slider1,
      title: "myWO - Toulon",
      address: "17 Littoral Frederic Mistral, Le Mourillon, 83000",
    },
    
  ];

  return (
    <>
    <div className="slider3">
    <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <Carousel.Caption>
              <h1>{slide.title}</h1>
              <div className="location">
                <div className="iconWrapper">
                  <img src={location_icon} alt="Location Icon" />
                </div>
                <p>{slide.address}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="paddingGlobal">
        <div className="containerLarge">
          <Navigation />
        </div>
      </div>
    </div>
    </>
  );
}

export default Slider3;
