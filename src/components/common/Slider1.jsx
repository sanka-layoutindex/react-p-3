import React from "react";
import card1 from "../../assets/images/card1.webp";
import card2 from "../../assets/images/card2.webp";
import card3 from "../../assets/images/card3.webp";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

import { Navigation } from "swiper/modules";

function Slider1() {
  const cards = [
    {
      title: "myWO - Toulon",
      image: card1,
      description: "5€ L’heure - 15€ Demi-journée - 25€ Journée",
      icons: [icon1, icon2, icon3, icon4],
    },
    {
      title: "myWO - Marseille",
      image: card2,
      description: "5€ L’heure - 15€ Demi-journée - 25€ Journée",
      icons: [icon1, icon2, icon3, icon4],
    },
    {
      title: "myWO - Saint-Germain en Laye",
      image: card3,
      description: "",
      label: "Prochainement",
    },
    {
      title: "myWO - Toulon",
      image: card1,
      description: "5€ L’heure - 15€ Demi-journée - 25€ Journée",
      icons: [icon1, icon2, icon3, icon4],
    },
    {
      title: "myWO - Marseille",
      image: card2,
      description: "5€ L’heure - 15€ Demi-journée - 25€ Journée",
      icons: [icon1, icon2, icon3, icon4],
    },
    {
      title: "myWO - Saint-Germain en Laye",
      image: card3,
      description: "",
      label: "Prochainement",
    },
  ];

  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={25}
      navigation={true}
      modules={[Navigation]}
      centeredSlides={true}
      freeMode={true}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 25,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide className="slider1" key={index}>
          <div className="card">
      
            {card.label && <span className="label">{card.label}</span>}
            <img src={card.image} alt={card.title} />
            <div className="card-body">
              <h3>{card.title}</h3>
              <div className="icons">
                {card.icons?.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={`icon-${i}`}
                    className="icon"
                  />
                ))}
              </div>
              <p>
                {card.description.split(/(\d+€)/).map((part, i) => (
                  <React.Fragment key={i}>
                    {/\d+€/.test(part) ? (
                      <span className="price">{part}</span>
                    ) : (
                      part
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider1;
