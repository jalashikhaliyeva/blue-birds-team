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

  // Center slides if there are fewer than 10
  const shouldCenter = slides.length < 10;

  // Helper function that renders text with images after every 2 words.
  const renderSlideContent = (text) => {
    // Split the text and filter out any empty strings.
    const words = text.split(" ").filter((word) => word.trim() !== "");
    const images = [
      "/images/birds-heads/1.png",
      "/images/birds-heads/2.png",
      "/images/birds-heads/3.png",
    ];
    const segments = [];

    // Process words in pairs.
    for (let i = 0; i < words.length; i += 2) {
      let pairText = words[i];
      if (i + 1 < words.length) {
        pairText += " " + words[i + 1];
      }
      segments.push(
        <span
          key={`segment-${i}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap", // Prevent wrapping within this container.
            marginRight: "176px", // Optional spacing between segments.
            marginLeft: "46px", // Optional spacing between segments.
          }}
        >
          <span
            className="text-mainColorDark font-oswald font-semibold text-140 uppercase"
            style={{ whiteSpace: "nowrap" }} // Ensure the text doesn't wrap.
          >
            {pairText}
          </span>
          {/* Only add an image if there is a complete pair */}
          {i + 1 < words.length && (
            <img
              key={`img-${i}`}
              src={images[(i / 2) % images.length]}
              alt="bird head"
              style={{ margin: "0 8px", width: "180px" }}
            />
          )}
        </span>
      );
    }
    return segments;
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
            <div className={styles.embla__slide} key={index}>
              <div
                className={`${styles.box} ${
                  isAboutPage ? styles.boxWhite : ""
                }`}
              >
                {renderSlideContent(slide.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
