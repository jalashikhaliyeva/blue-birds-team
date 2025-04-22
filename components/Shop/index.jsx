// components/Shop.js
import React from "react";
import Container from "../Container";
import Link from "next/link";
import HoverImage from "../HoverImage";
import Image from "next/image";

function Shop({ shopProducts }) {
  return (
    <div className="bg-mainColorDark py-12">
      {/* Sticky header with centered title + absolute image */}
      <div className=" top-0 bg-mainColorDark z-10">
        <Container>
          <div className="relative py-6">
            {/* Centered title */}
            <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center text-white">
              Shop
            </h4>
            {/* Absolute image positioned left of the exact center */}
            <Image
              src="/images/birds-heads/3.png"
              alt="Bird Head"
              width={90}
              height={90}
              className="absolute top-1/2 md:left-[300px] w-[140px] -translate-x-full translate-x-4 -translate-y-1/2 filter brightness-0 invert"
            />
          </div>
        </Container>
      </div>

      {/* Product grid */}
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-10">
          {shopProducts?.data.map((character, index) => (
            <Link key={index} href={character.link}>
              <div className="flex flex-col cursor-pointer">
                <div className="flex flex-col rounded-lg bg-white py-5">
                  <p className="font-poppins text-2xl text-center font-bold text-mainColorDark">
                    {character.name}
                  </p>
                  {/* Hover‐zoom image */}
                  <HoverImage
                    src={character.image}
                    alt={character.name}
                    width={400}
                    height={500}
                    className="h-[350px] object-cover mt-4"
                  />
                </div>
                {/* <p className="uppercase pt-3 font-poppins text-lg">
                  {character.title}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Shop;
