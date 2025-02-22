import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import lib from "../../assets/images/Lib.png";
import lounge from "../../assets/images/Lounge.png";
import meeting from "../../assets/images/meeting.png";

function DesignSlider() {
  const slides = [
    {
      heading: "ESPACE",
      title: "Lib",
      image: lib,
      description: (
        <>
          Co-working ouvert à tous. <br />
          Toute la journée. <br />
          Gratuit, sur réservation.
        </>
      ),
      sub: "Sous réserve de consommation et de places",
    },
    {
      heading: "ESPACE",
      title: "Lounge",
      image: lounge,
      description: (
        <>
          Co-working calme et isolé <br /> À l'heure / Demi-journée / Journée{" "}
          <br /> Payant et sur réservation.
        </>
      ),
    },
    {
      heading: "ESPACE",
      title: "Meeting",
      image: meeting,
      description: (
        <>
          Espace privatif <br /> Demi-journée / Journée <br /> Payant et sur
          réservation.
        </>
      ),
    },
    {
      heading: "ESPACE",
      title: "Lib",
      image: lib,
      description:
        "Co-working ouvert à tous. Toute la journée. Gratuit, sur réservation.",
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      speed={500}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="slider2" key={index}>
          <div
            className="card"
            itemscope
            itemtype="https://schema.org/Offer"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="card-image"
              itemprop="image"
            />
            <div className="card-body">
              <div className="titleWrapper">
                <h5 itemprop="category">{slide.heading}</h5>
                <h3 className="card-title" itemprop="name">
                  {slide.title}
                </h3>
              </div>
              <div className="textWrapper">
                <p itemprop="description">{slide.description}</p>
                {slide.sub && (
                  <span itemprop="additionalProperty">{slide.sub}</span>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DesignSlider;
