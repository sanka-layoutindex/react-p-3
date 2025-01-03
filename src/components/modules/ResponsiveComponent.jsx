import React, { useState, useEffect } from "react";
import Slider1 from "../common/Slider1";
import ListingCards from "../common/ListingCard";



function ResponsiveComponent() {
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
      {isLargeScreen ? <Slider1/> : <ListingCards/>}
    </div>
  );
}

export default ResponsiveComponent;
