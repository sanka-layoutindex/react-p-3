import React from "react";
import FoamVertical from "../common/FoamVertical";
import ListingCards from "../common/ListingCard";

function ListingSection() {
  return (
    <>
      <div className="paddingGlobal listingSection">
        <div className="containerLarge">
        <p>Accueil - Co working Toulon</p>
              <div className="MaintitleWrapper">
                <h1 className="textMediumXl fcBlack">6 résultats à Toulon</h1>
              </div>
          <div className="content">
            <div className="left">
              <ListingCards></ListingCards>
            </div>
            <div className="right">
              <FoamVertical></FoamVertical>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingSection;
