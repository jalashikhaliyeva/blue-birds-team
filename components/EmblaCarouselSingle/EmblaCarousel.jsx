import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./embla.module.css";

const EmblaCarousel = ({ slides, options, autoScrollOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll(autoScrollOptions)]);

  // A helper function to render the two images side by side.
  const renderSlideContent = (images) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row", // explicitly set horizontal layout
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <img
          src={images[0]}
          alt="Bird Head"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={images[1]}
          alt="Logo"
          style={{ width: "90px", height: "auto" , marginRight: "120px !important"}}
        />
      </div>
    );
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={`${slide.id}-${index}`}>
              <div className={styles.box}>
                {renderSlideContent(slide.images)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
