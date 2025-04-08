// components/Shop.js
import React from "react";
import Container from "../Container";
import Link from "next/link";
import HoverImage from "../HoverImage";

function Shop({ shopProducts }) {
  return (
    <div className="bg-mainColorDark py-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        Shop
      </h4>

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-10">
          {shopProducts?.data.map((character, index) => (
            <Link key={index} href={character.link}>
              <div className="flex flex-col cursor-pointer">
                <div className="flex flex-col rounded-lg bg-white py-5">
                  <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                    {character.name}
                  </p>
                  {/* <-- Here’s our hover‐zoom image --> */}
                  <HoverImage
                    src={character.image}
                    alt={character.name}
                    width={400}
                    height={500}
                    className="h-[350px] object-cover mt-4"
                  />
                </div>
                <p className="uppercase pt-3 font-poppins text-lg">
                  {character.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Shop;
