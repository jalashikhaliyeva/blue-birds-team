import React from "react";
import Container from "../Container";
import Image from "next/image";

function Beats() {
  return (
    <div className="bg-mainColorDark py-12 md:py-20">
      <Container>
        <h4 className="font-poppins text-4xl md:text-7xl text-white font-semibold uppercase pb-12 md:pb-28">
          What kind of beats are you
        </h4>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="font-poppins text-base md:text-lg max-w-full md:max-w-[300px] py-6 md:py-9">
            A true{" "}
            <span className="font-semibold">
              2D Digital Collectiable project
            </span>{" "}
            focuses on art, music, fashion, and .....
          </p>

          <div className="relative flex gap-0 mt-6 lg:mt-0">
            {/* Positioned image */}
            <Image
              src={`/images/birds-heads/3.png`}
              alt="Bird head"
              className="w-[100px] md:w-[200px] brightness-0 invert absolute top-[-65px] md:top-[-130px] right-[-30px] md:right-[-60px] z-[99]"
              width={200}
              height={200}
            />

            {/* Semi-transparent rectangles */}
            <div className="absolute top-[-30px] md:top-[-60px] left-[-50px] md:left-[-100px] w-[285px] md:w-[570px] h-[275px] md:h-[550px] bg-white opacity-90 z-10"></div>
            <div className="absolute top-[0px] left-[0px] w-[310px] md:w-[620px] h-[265px] md:h-[530px] bg-white opacity-50 z-10"></div>

            {/* Images */}
            <Image
              src={`/images/team-birds/Cocky.png`}
              alt="Bird head"
              className="w-[200px] md:w-[400px] relative z-20 opacity-40"
              width={200}
              height={200}
            />
            <Image
              src={`/images/team-birds/Bykush.png`}
              alt="Bird head"
              className="w-[200px] md:w-[400px] ml-[-100px] md:ml-[-200px] relative z-20 opacity-40"
              width={200}
              height={200}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Beats;
