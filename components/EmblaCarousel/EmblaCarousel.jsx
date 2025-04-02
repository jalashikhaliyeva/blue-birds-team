// EmblaCarousel.jsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./embla.module.css";
import { useRouter } from "next/router";

const EmblaCarousel = ({ slides, options, autoScrollOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll(autoScrollOptions)]);
  const router = useRouter();
  const isAboutPage = router.pathname === "/about";
  const shouldCenter = slides.length < 10;

  const renderSlideContent = (slide) => {
    const words = slide.text.split(" ").filter((word) => word.trim() !== "");
    const segments = [];

    // Group words into pairs
    for (let i = 0; i < words.length; i += 2) {
      let pairText = words[i];
      if (i + 1 < words.length) {
        pairText += " " + words[i + 1];
      }
      segments.push(pairText);
    }

    return segments.map((pairText, index) => (
      <span
        key={`segment-${index}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          marginLeft: index === 0 ? "0" : "46px",
          marginRight: index === segments.length - 1 ? "0" : "80px",
        }}
      >
        <span className="text-mainColorDark font-oswald font-semibold  text-5xl md:text-6xl md:text-140 uppercase">
          {pairText}
        </span>
        {/* Add image for all but the last segment */}
        {index < segments.length - 1 &&
          slide.icons &&
          slide.icons.length > 0 && (
            <img
              key={`img-${index}`}
              src={slide.icons[index % slide.icons.length]}
              alt="bird head"
              className="w-[55px] mb-[20px] mr-[-75px] md:mr-0 md:mb-0 md:w-[120px] pt-[30px]"
            />
          )}
      </span>
    ));
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div
          className={`${styles.embla__container} ${
            shouldCenter ? styles.embla__containerCenter : ""
          }`}
        >
          {slides.map((slide, index) => (
            <div className={styles.embla__slide}  key={`slides-${slide.id}-${index}`}>
              <div
                className={`${styles.box} ${
                  isAboutPage ? styles.boxWhite : ""
                }`}
              >
                {renderSlideContent(slide)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
