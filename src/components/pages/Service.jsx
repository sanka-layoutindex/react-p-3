import React from "react";
import Footer from "../modules/Footer";
import Slider3 from "../common/Slider3";
import ServiceSection from "../modules/ServiceSection";

function Service() {
  return (
    <>
        <section className="servicePage">
        <Slider3></Slider3>          
        <div className="content">
          <ServiceSection></ServiceSection>
        </div>
        <Footer></Footer>
        </section>
    </>
  );
}

export default Service;
