import Image from "next/image";
import React from "react";
import Container from "../Container";

function ViewOnOpenSea({ collectionCharacters }) {
  return (
    <div className="bg-mainColorDark pt-12">
      <h4 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center ">
        View on Opensea
      </h4>

      <div className="mb-5 flex  items-center justify-center m-auto flex-row gap-1 w-[100px] md:w-[470px] pb-10">
        <hr className="w-full border-t-4 border-white my-2" />
        <hr className="w-[40px] border-t-4 border-white my-2" />
        <hr className="w-[34px] border-t-4 border-white my-2" />
        <hr className="w-[34px] border-t-4 border-white my-2" />
        <hr className="w-[34px] border-t-4 border-white my-2" />
        <hr className="w-[14px] border-t-4 border-white my-2" />
      </div>

      {/* <div className="bg-white">
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
      </div> */}
    </div>
  );
}

export default ViewOnOpenSea;
