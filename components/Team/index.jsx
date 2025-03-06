import Image from "next/image";
import React from "react";
import Container from "../Container";

function Team() {
  return (
    <div className="bg-mainColorDark py-10">
      <h6 className="uppercase text-white text-3xl md:text-8xl font-oswald font-semibold text-center pb-10">
        BlueBirds Team
      </h6>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
          <div className="flex flex-col">
            <Image
              width={400}
              height={500}
              src={"/images/team-birds/Bykush.png"}
            />
            <p className="font-poppins text-2xl text-center font-semibold text-white">
              Bykush
            </p>
            <p className="font-poppins text-lg text-center font-normal text-gray-500">
              Marketing & Strategy
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              width={400}
              height={500}
              src={"/images/team-birds/Cocky.png"}
            />
            <p className="font-poppins text-2xl text-center font-semibold text-white">
              Cocky
            </p>
            <p className="font-poppins text-lg text-center font-normal text-gray-500">
              Creative & Operations
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              width={400}
              height={500}
              src={"/images/team-birds/Tengu.png"}
            />
            <p className="font-poppins text-2xl text-center font-semibold text-white">
              Tengu
            </p>
            <p className="font-poppins text-lg text-center font-normal text-gray-500">
              Art Directions
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              width={400}
              height={500}
              src={"/images/team-birds/Tvity.png"}
            />
            <p className="font-poppins text-2xl text-center font-semibold text-white">
              Tvity
            </p>
            <p className="font-poppins text-lg text-center font-normal text-gray-500">
              Development
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Team;
