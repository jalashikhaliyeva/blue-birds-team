import Image from "next/image";
import React from "react";
import Container from "../Container";

function ViewOnOpenSea() {
  return (
    <div className="bg-mainColorDark pt-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        View on Opensea
      </h4>

      <div className="bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white py-10">
            <div className="flex flex-col">
              <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                Bykush
              </p>
              <Image
                width={400}
                height={500}
                alt="Bykush"
                src={"/images/team-birds/Bykush.png"}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                Cocky
              </p>
              <Image
                width={400}
                height={500}
                alt="Cocky"
                src={"/images/team-birds/Cocky.png"}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                Tengu
              </p>
              <Image
                width={400}
                height={500}
                alt="Tengu"
                src={"/images/team-birds/Tengu.png"}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                Tvity
              </p>
              <Image
                width={400}
                height={500}
                alt="Tvity"
                src={"/images/team-birds/Tvity.png"}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ViewOnOpenSea;
