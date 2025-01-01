import React from "react";
import Footer from "../modules/Footer";
import ListingSection from "../modules/ListingSection";
import NavigationTwo from "../common/NavigationTwo";

function Listing() {
  return (
    <>
      <section className="listingPage">
        <NavigationTwo></NavigationTwo>
        <div className="content">
          <ListingSection></ListingSection>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Listing;
