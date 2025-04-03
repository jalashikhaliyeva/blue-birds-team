import React, { useState, useRef } from "react";
import styles from "./BgImage.module.css"; // Import the CSS file

function BgImage() {
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const originX = ((e.clientX - rect.left) / rect.width) * 100;
    const originY = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${originX}% ${originY}%`);
  };

  const handleMouseEnter = (e) => {
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setTransformOrigin("center center");
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.bgImageContainer} `}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.bgImage} `}
        style={{ transformOrigin }} // dynamic value from state
      ></div>
    </div>
  );
}

export default BgImage;
