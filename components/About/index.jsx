import React from "react";
import styles from "./style.module.css";
import Container from "../Container";

function About() {
  return (
    <>
      <Container>
        <div className="flex gap-5 justify-between pt-[100px] md:pt-[200px] md:pb-[100px]">
          <div data-aos="fade-right" className="max-w-[160px] md:max-w-[290px]">
            <h1 className="font-poppins md:text-lg font-medium text-mainColorDark">
              A true{" "}
              <span className="font-semibold">
                3d Digital Collectible project
              </span>{" "}
              focused on art, music, fashion and culture.
            </h1>
          </div>
          <div className="font-oswald font-semibold text-4xl md:text-6xl uppercase text-mainColorDark pb-[200px] md:pt-[260px] md:pb-0">
            <h2>Mint your Nft</h2>
          </div>
        </div>
      </Container>

      <div className="pb-[300px]">
        <div className={`${styles.marquee}`}>
          <div className={`${styles.marquee__inner}`}>
            <img src="/images/plane/plane.png" alt="plane" />
            <img src="/images/plane/plane.png" alt="plane duplicate" />
          </div>
        </div>
        <div className={`${styles.marquee}`}>
          <div className={`${styles.marquee__inner} ${styles.reverse}`}>
            <img src="/images/plane/plane-left.png" alt="plane" />
            <img src="/images/plane/plane-left.png" alt="plane duplicate" />
          </div>
        </div>
      </div>

      {/* Second marquee (left-to-right) */}
    </>
  );
}

export default About;
