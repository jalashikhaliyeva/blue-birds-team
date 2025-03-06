import React from "react";
import Container from "../Container";
import Image from "next/image";

function OurCollections() {
  return (
    <div className="bg-mainColorDark py-20">
      <Container>
        <h3 className="uppercase text-3xl md:text-8xl font-oswald font-semibold text-center pb-10">
          Our Collections
        </h3>

        <div className="flex gap-3  md:gap-20 uppercase text-lg md:text-2xl pb-16">
          <p>All</p>
          <p>Listed</p>
          <p>New</p>
          <p>Collections 1</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="flex flex-col ">
            <div className="bg-white p-7 flex flex-col">
              <p className="text-mainColorDark font-oswald font-bold text-center text-lg pb-4">
                Tvity
              </p>
              <Image
                src={"/images/team-birds/Tvity.png"}
                width={200}
                height={500}
                quality={100}
                className="w-[300px]"
              />
            </div>
            <p className="uppercase pt-3 font-poppins text-lg">Collections 1</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-white p-7 flex flex-col">
              <p className="text-mainColorDark font-oswald font-bold text-center text-lg pb-4">
                Tengu
              </p>
              <Image
                src={"/images/team-birds/Tengu.png"}
                width={200}
                height={500}
                quality={100}
                className="w-[300px]"
              />
            </div>
            <p className="uppercase pt-3 font-poppins text-lg">Collections 1</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-white p-7 flex flex-col">
              <p className="text-mainColorDark font-oswald font-bold text-center text-lg pb-4">
                Cocky
              </p>
              <Image
                src={"/images/team-birds/Cocky.png"}
                width={200}
                height={500}
                quality={100}
                className="w-[300px]"
              />
            </div>
            <p className="uppercase pt-3 font-poppins text-lg">Collections 1</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-white p-7 flex flex-col">
              <p className="text-mainColorDark font-oswald font-bold text-center text-lg pb-4">
                Bykush
              </p>
              <Image
                src={"/images/team-birds/Bykush.png"}
                width={200}
                height={500}
                quality={100}
                className="w-[300px]"
              />
            </div>
            <p className="uppercase pt-3 font-poppins text-lg">Collections 1</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurCollections;
