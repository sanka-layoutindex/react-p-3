import React from "react";
import zeus from "../../assets/images/zeus.png";
import Athena from "../../assets/images/athena.png";
import Zephir from "../../assets/images/Zephir.png";

const services = [
  {
    title: "Zeus",
    description: "Eservice Lounge",
    price: "25€",
    buttonText: "Réserver",
    label: "La journée",
    image: zeus,
  },
  {
    title: "Athena",
    description: "Eservice Lounge",
    buttonText: "Sélectionner d’autres dates",
    label: (
      <>
        Indisponible <br />
        pour vos dates
      </>
    ),
    image: Athena,
  },
  {
    title: "Zephir",
    description: "Salle disponible sans réservation",
    buttonText: "En savoir plus",
    label: (
      <>
        Salle disponible <br />
        sans réservation
      </>
    ),
    image: Zephir,
  },
];

const ServiceCards = () => {
  return (
    <div className="service-cards-container">
      {services.map((service, index) => (
        <div key={index} className="service-card card">
          <div className="imageWrapper">
          <img
            src={service.image}
            alt={service.title}
            className="service-card-image"
          />
          </div>
          <div className="service-card-content card-body">
            <div className="service-card-header">
              <h5 className="fw700">{service.title}</h5>
              <p className="fw500">{service.description}</p>
            </div>
            <div className="service-card-footer">
              <div className="label-info">
              {service.label && (
                  <span className="service-card-label fw-500">{service.label}</span>
                )}
                {service.price && (
                  <span className="service-card-price fw700">{service.price}</span>
                )}
              </div>

              <button className="service-card-button fw700">
                {service.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
