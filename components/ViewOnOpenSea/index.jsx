import Image from "next/image";
import React from "react";
import Container from "../Container";

function ViewOnOpenSea({ collectionCharacters }) {
  return (
    <div className="bg-mainColorDark pt-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        View on Opensea
      </h4>

      <div className="bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white py-10">
            {collectionCharacters?.data?.map((character) => (
              <div key={character.name} className="flex flex-col">
                <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
                  {character.name}
                </p>
                <Image
                  width={400}
                  height={500}
                  alt={character.name}
                  src={character.icon}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ViewOnOpenSea;
