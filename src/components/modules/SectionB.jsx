import React from "react";
import Button2 from "../common/Button2";
import DesignSlider from "../common/Slider2";

function SectionB() {
  return (
    <>
      <div className="paddingGlobal section-b">
        <div className="containerLarge">
          <div className="content">
            <div className="heading">
              <div className="titleWrapper">
                <h2 className="fw500">
                  3 types <br /> d’espaces 
                </h2>
              </div>
              <Button2 btnname="En savoir plus" to="/EnSavoirPlus" />
            </div>
            <div className="slider">
                <DesignSlider></DesignSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionB;
