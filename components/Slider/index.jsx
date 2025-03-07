// components/Customers.js
import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

function Slider({
  // Create 10 slides each with the new text
  slides = Array.from({ length: 10 }, () => ({
    text: "The story begins here ",
  })),
  slides2 = Array.from({ length: 10 }, () => ({
    text: "But its ending is unknown...",
  })),
}) {
  const OPTIONS = { loop: true };

  // Auto-scroll configuration (using left direction here)
  const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };
  const autoScrollRight = { playOnInit: true, interval: 8000, speed: 1 };

  return (
    <div className="z-10 pt-[150px]">
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />
      <EmblaCarousel
        slides={slides2}
        options={OPTIONS}
        autoScrollOptions={autoScrollRight}
      />
    </div>
  );
}

export default Slider;
