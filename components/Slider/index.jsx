// components/Customers.js
import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

function Slider({ slidesData }) {
  const OPTIONS = { loop: true };
  // Auto-scroll configurations remain the same.
  const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };
  const autoScrollRight = { playOnInit: true, interval: 8000, speed: 1 };

  const slidesArr = Array.from({ length: 10 }, () => ({
    text: slidesData[0].title,
    icons: [slidesData[0].icon_1, slidesData[0].icon_2, slidesData[0].icon_3],
  }));

  const slides2Arr = Array.from({ length: 10 }, () => ({
    text: slidesData[1].title,
    icons: [slidesData[1].icon_1, slidesData[1].icon_2, slidesData[1].icon_3],
  }));

  return (
    <div className="z-10 pt-5 md:pt-[150px]">
      <EmblaCarousel
        slides={slidesArr}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />
      <EmblaCarousel
        slides={slides2Arr}
        options={OPTIONS}
        autoScrollOptions={autoScrollRight}
      />
    </div>
  );
}

export default Slider;
