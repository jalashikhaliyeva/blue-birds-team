import React from "react";
import styles from "./style.module.css";
import Container from "../Container";

function About({ props }) {
  const descriptionHtml = props.description
    .replace(/<b>/g, '<span class="font-semibold">')
    .replace(/<\/b>/g, "</span>");

  return (
    <>
      <Container>
        <div className="flex gap-5 justify-between pt-[100px] md:pt-[200px] md:pb-[100px]">
          <div data-aos="fade-right" className="max-w-[160px] md:max-w-[290px]">
            <h1
              onClick={() => window.open(props.link_2, "_blank")}
              className="font-poppins md:text-lg font-medium text-mainColorDark cursor-pointer"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </div>
          <div
            onClick={() => window.open(props.link_1, "_blank")}
            className="font-oswald cursor-pointer font-semibold text-4xl md:text-6xl uppercase text-mainColorDark pb-[200px] md:pt-[260px] md:pb-0"
          >
            <h2 className="cursor-pointer">{props.title}</h2>
          </div>
        </div>
      </Container>

      <div className="pb-[300px]">
        <div className={`${styles.marquee}`}>
          <div className={`${styles.marquee__inner}`}>
            <img src={props.plane_2} alt="plane" />
            <img src={props.plane_2} alt="plane duplicate" />
          </div>
        </div>
        <div className={`${styles.marquee}`}>
          <div className={`${styles.marquee__inner} ${styles.reverse}`}>
            <img src={props.plane_1} alt="plane" />
            <img src={props.plane_1} alt="plane duplicate" />
          </div>
        </div>
      </div>

      {/* Second marquee (left-to-right) */}
    </>
  );
}

export default About;
