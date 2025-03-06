import React from "react";

function About() {
  return (
    <div className="flex gap-5 justify-between pt-[100px] md:pt-[200px] md:pb-[700px]">
      <div data-aos="fade-right" className="max-w-[160px] md:max-w-[290px]">
        <h1 className="font-poppins  md:text-lg font-medium text-mainColorDark">
          A true{" "}
          <span className="font-semibold">3d Digital Collectible project</span>{" "}
          focused on art, music, fashion and culture.
        </h1>
      </div>

      <div className="font-oswald font-semibold text-4xl md:text-6xl uppercase text-mainColorDark pb-[200px] md:pt-[260px] md:pb-0">
        <h2>Mint your Nft</h2>
      </div>
    </div>
  );
}

export default About;
