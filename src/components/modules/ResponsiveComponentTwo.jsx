import React, { useState, useEffect } from "react";
import FoamGroup from "../common/FoamGroup";
import MobileFoam from "../common/MobileFoam";




function ResponsiveComponentTwo() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1050);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? <FoamGroup/> : <MobileFoam/>}
    </div>
  );
}

export default ResponsiveComponentTwo;
