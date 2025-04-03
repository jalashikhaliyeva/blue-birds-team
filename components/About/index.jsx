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
        <div className="flex gap-5 justify-between pt-[180px] pb-5  md:pt-[200px] md:pb-[100px]">
          <div data-aos="fade-right" className="max-w-[160px]  pt-[80px] md:pt-0 md:max-w-[290px]">
            <h1
              onClick={() => window.open(props.link_2, "_blank")}
              className="font-poppins text-xs max-w-[100px] md:max-w-screen md:text-lg font-medium pt-7 text-mainColorDark cursor-pointer"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </div>
          <div
  onClick={() => window.open(props.link_1, "_blank")}
  className="font-oswald cursor-pointer pt-[100px] pl-7 md:pl-0 font-semibold text-base md:text-6xl uppercase text-mainColorDark pb-4 md:pt-[260px] md:pb-0"
>
  <h2 className={`${styles.titleUnderline}`}>{props.title}</h2>
</div>

        </div>
      </Container>

      <div className="pb-28  md:pb-[300px]">
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
