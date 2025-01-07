import React from "react";

function SectionC() {
  return (
    <>
      <div className="paddingGlobal section-c" itemscope itemtype="https://schema.org/Offer">
        <div className="containerLarge">
          <div className="content">
            {/* Left Section */}
            <div className="left">
              <div className="titleWrapper">
                <h5 className="fw400" itemprop="headline">Découvrez notre </h5>
                <h2 itemprop="name">Abonnement National</h2>
              </div>
              <div className="textWrapper">
                <h6>
                  Un abonnement local est aussi disponible à partir de 
                  <span itemprop="priceCurrency" content="EUR"> €</span>
                  <span itemprop="price" content="100">100/mois</span> 
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

            {/* Right Section */}
            <div className="right">
              <div className="card">
                <div className="price" itemprop="priceCurrency" content="EUR">
                  <span itemprop="price">10 €</span>
                </div>
                <div className="title" itemprop="validFor">
                  valable un mois
                </div>
                <a
                  href="/subscribe"
                  className="description"
                  itemprop="url"
                >
                  Souscrire en ligne
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionC;
