// components/HoverImage.js
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function HoverImage({ src, alt, width, height, className }) {
  // We keep track of the transform origin so that the panning effect reflects the cursor position
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate percentages relative to the container dimensions
    const originX = ((e.clientX - rect.left) / rect.width) * 100;
    const originY = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${originX}% ${originY}%`);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="transition-transform duration-500 ease"
        style={{
          transformOrigin,
          // Always apply the zoom level of 1.1
          transform: "scale(1.1)"
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
    </div>
  );
}
