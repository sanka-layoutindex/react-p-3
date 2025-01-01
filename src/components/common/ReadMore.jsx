import React, { useState } from "react";


const ReadMoreSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-section">
      <div className={`text-area ${isExpanded ? "expanded" : ""}`}>
        <p>
          MyWO vous invite dans son espace coworking de Toulon. 2 types d’espaces
          s’offrent à vous, un espace animé et des lorem ipsum dolor sit amet.
          Quae dum ita struuntur, indicatum est. Ego vero sic intelligo, Patres
          conscripti, nos hoc tempore in provinciis decernendis perpetuae pa...
          
        </p>
        {!isExpanded && <div className="blur-effect"></div>}
      </div>
      <a className="read-more-btn fw700" onClick={handleToggle}>
        {isExpanded ? "Lire moins" : "En savoir plus"}
      </a>
    </div>
  );
};

export default ReadMoreSection;
