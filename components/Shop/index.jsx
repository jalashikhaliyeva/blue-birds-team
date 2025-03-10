import React from "react";
import Container from "../Container";
import Image from "next/image";

function Shop({ collectionCharacters }) {
  return (
    <div className="bg-mainColorDark py-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        Shop
      </h4>

      <div className="">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5  py-10">
            {collectionCharacters?.data.map((character, index) => (
              <div className="flex flex-col">
                <div className="flex flex-col bg-white py-5">
                  <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                    {character.name}
                  </p>
                  <Image
                    width={400}
                    height={500}
                    alt="Bykush"
                    src={character.icon}
                  />
                </div>
                <p className="uppercase pt-3 font-poppins text-lg">
                  Collections {index + 1}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
