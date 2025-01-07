import React from "react";
import CustomTabs from "../common/Foam1";
import Navigation from "../common/Navigation";

function HeaderSection() {
  return (
    <>
      <div
        className="paddingGlobal header"
        itemscope
        itemtype="https://schema.org/WebPage"
      >
        <div className="containerLarge">
          <Navigation />
          <div className="heading" itemprop="headline">
            <h1>
              Votre espace de travail, <br />
              la convivialité en plus.
            </h1>
          </div>
          <div className="foam" itemscope itemtype="https://schema.org/Service">
            <CustomTabs />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
