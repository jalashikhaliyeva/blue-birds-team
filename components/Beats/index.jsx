import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import styles from "./style.module.css";

function Beats({ props }) {
  const [expanded, setExpanded] = useState(false);

  const descriptionHtml = props.description
    .replace(/<b>/g, '<span class="font-semibold">')
    .replace(/<\/b>/g, "</span>");

  return (
    <div className="bg-mainColorDark py-12 md:py-20">
      <Container>
        <h4 className="font-oswald text-4xl md:text-6xl text-white font-semibold uppercase pb-12 md:pb-28">
          {props.title}
        </h4>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-1/2 py-6 md:py-9">
            <p
       
              className={`font-poppins text-base md:text-lg max-w-full ${!expanded ? "line-clamp-10" : ""}`}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            {!expanded && (
              <button
                className="mt-2 text-neutral-300 underline font-poppins cursor-pointer"
                onClick={() => setExpanded(true)}
              >
                See more...
              </button>
            )}
          </div>

          <div className="relative w-1/2 flex gap-0 mt-6 lg:mt-0">
            <Image
              src={`/images/birds-heads/head3.webp`}
              alt="Bird head"
              className={`${styles.headAnimation} w-[100px] md:w-[100px] brightness-0 invert absolute top-[-65px] md:top-[-130px] right-[-30px] md:right-[-20px] z-[99]`}
              width={200}
              height={200}
            />

            <Image
              src={props.image_1}
              alt="Bird head"
              className="w-[300px] md:w-[800px] relative z-20"
              width={700}
              height={700}
              quality={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Beats;
