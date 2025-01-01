import React from "react";

function SectionC() {
  return (
    <>
      <div className="paddingGlobal section-c">
        <div className="containerLarge">
          <div className="content">
            <div className="left">
              <div className="titleWrapper">
                <h5 className="fw400">Découvrez notre </h5>
                <h2>Abonnement National</h2>
              </div>
              <div className="textWrapper">
              <h6>
                Un abonnement local est aussi disponible à partir de 100 €/mois
                et sans engagement.
              </h6>
              <p>
                Cette offre est dédiée aux co-workers réguliers au sein d’un
                établissement myWO.
              </p>
              <p>
                Pour connaître le tarif, il est nécessaire de vous rapprocher de
                l’établissement. L’offre ne peut être souscrite en ligne.
              </p>
              </div>
            </div>
            <div className="right">
              <div className="card">
                <div className="price">10 €</div>
                <div className="title">valable un mois </div>
                <div className="description">Souscrire en ligne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionC;
