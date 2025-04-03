import Image from "next/image";
import React from "react";
import Container from "../Container";

function Team({ teamData }) {
  return (
    <div className="bg-white py-10">
      <h6 className="uppercase text-mainColorDark text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
        BlueBirds Team
      </h6>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {teamData?.data?.map((member, index) => (
  <div key={index} className="flex flex-col">
    <Image width={400} height={500} alt="Bykush" src={member.icon} />
    <p className="font-poppins text-2xl text-center font-semibold text-mainColorDark">
      {member.name}
    </p>
    <p className="font-poppins text-lg text-center font-normal text-gray-500">
      {member.profession}
    </p>
  </div>
))}


        </div>
      </Container>
    </div>
  );
}

export default Team;
