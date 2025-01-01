import React from "react";
import CustomTabs from "../common/Foam1";
import Navigation from "../common/Navigation";

function HeaderSection() {
  return (
    <>
      <div className="paddingGlobal header">
        <div className="containerLarge">
          <Navigation/>
          <div className="heading">
            <h1>
              Votre espace de travail, <br />
              la convivialité en plus.
            </h1>
          </div>
          <div className="foam">
            <CustomTabs></CustomTabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
