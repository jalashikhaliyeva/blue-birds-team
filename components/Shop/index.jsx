import React from "react";
import Container from "../Container";
import Image from "next/image";

function Shop() {
  return (
    <div className="bg-mainColorDark py-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        Shop
      </h4>

      <div className="">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5  py-10">
            <div className="flex flex-col">
              <div className="flex flex-col bg-white py-5">
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
              <p className="uppercase pt-3 font-poppins text-lg">
                Collections 1
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col bg-white py-5">
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
              <p className="uppercase pt-3 font-poppins text-lg">
                Collections 1
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col bg-white py-5">
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
              <p className="uppercase pt-3 font-poppins text-lg">
                Collections 1
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col bg-white py-5">
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
              <p className="uppercase pt-3 font-poppins text-lg">
                Collections 1
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
