import React from "react";
import contactImg1 from "../../assets/images/contact-img1.png";
import contactImg2 from "../../assets/images/contact-img2.png";
import contactImg3 from "../../assets/images/contact-img3.png";
import contactImg4 from "../../assets/images/contact-img4.png";

function ContactSection() {
  return (
    <>
      <div className="paddingGlobal contactSection">
        <div className="containerLarge">
          <div className="content">
            <div className="boxOne">
              <div className="text-content">
                <div className="titleWrapper">
                  <h2 className="fw500">Notre concept</h2>
                </div>
                <p>
                  Sed tamen haec cum ita tutius observentur, quidam vigore
                  artuum inminuto rogati ad nuptias ubi aurum dextris manibus
                  cavatis offertur, inpigre vel usque Spoletium pergunt. haec
                  nobilium sunt instituta.
                </p>
                <p>
                  Alios autem dicere aiunt multo etiam inhumanius (quem locum
                  breviter paulo ante perstrinxi) praesidii adiumentique causa,
                  non benevolentiae neque caritatis, amicitias esse expetendas;
                  itaque, ut quisque minimum firmitatis haberet minimumque
                  virium, ita amicitias appetere maxime; ex eo fieri ut
                  mulierculae magis amicitiarum praesidia quaerant quam viri et
                  inopes quam opulenti et calamitosi quam ii qui putentur beati.
                </p>
              </div>
              <div className="image-content">
                <div className="imageWrapper">
                  <img
                    className="img-fluid"
                    src={contactImg1}
                    alt="contactImg"
                  />
                </div>
              </div>
            </div>
            <div className="boxSet">
              <div className="boxTwo">
                <div className="text-content">
                  <div className="titleWrapper">
                    <h3 className="fw500">Espace lib,</h3>
                  </div>
                  <p>
                    est un espace de co-working situé dans le lobby, à proximité
                    de l’accueil ou du bar de l’hôtel. Véritable lieu de vie,
                    vous pouvez vous y installer tranquillement pour travailler
                    seul ou avec des collègues, rencontrer des contacts
                    professionnels ou faire des after-works en toute
                    convivialité. Facilement identifiable grâce à une
                    signalétique forte, son accès est gratuit et sans
                    réservation à condition de consommer au moins une boisson.
                  </p>
                </div>
                <div className="image-content">
                  <div className="imageWrapper">
                    <img
                      className="img-fluid"
                      src={contactImg2}
                      alt="contactImg"
                    />
                  </div>
                </div>
              </div>
              <div className="boxThree">
                <div className="image-content">
                  <div className="imageWrapper">
                    <img
                      className="img-fluid"
                      src={contactImg3}
                      alt="contactImg"
                    />
                  </div>
                </div>
                <div className="text-content">
                  <div className="titleWrapper">
                    <h3 className="fw500">Espace lounge,</h3>
                  </div>
                  <p>
                    est un espace de co-working calme et isolé. Son accès est
                    payant et se fait sur réservation.
                  </p>
                  <ul>
                    <li>Tarifs :</li>
                    <li>
                      À l’heure : <span>à partir 5€</span>
                    </li>
                    <li>
                      À la demi-journée : <span>à partir 15€</span>
                    </li>
                    <li>
                      À la journée  :<span>à partir 25€</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="boxTwo">
                <div className="text-content">
                  <div className="titleWrapper">
                    <h3 className="fw500">Espace Meeting,</h3>
                  </div>
                  <p>
                    s’adresse à une clientèle corporate et se traduit par des
                    salons dédiés et parfaitement équipés pour organiser des
                    journées d’étude. Un service de restauration est compris
                    dans l’offre ainsi qu’un contact dédié sur place.
                  </p>
                  <p>
                    Equipements adaptés Vidéoprojection, paperboard, Wi-Fi haut
                    débit,…
                  </p>
                </div>
                <div className="image-content">
                  <div className="imageWrapper">
                    <img
                      className="img-fluid"
                      src={contactImg4}
                      alt="contactImg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;