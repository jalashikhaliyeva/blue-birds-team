import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
function Header({props}) {
  return (
    <div className="flex justify-between p-0">
      <div className="flex w-[160px] md:w-[240px] p-0">
        <Image
          src={props.image}
          alt="Logo Blue Birds"
          layout="shift"
          placeholder="blur"
          width={200}
          height={200}
          blurDataURL="/images/blur/blur.avif"
          className="w-full"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaFacebookF className="fill-white text-sm md:text-lg" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaInstagram className="fill-white text-sm md:text-lg" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaTwitter className="fill-white text-sm md:text-lg" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaGooglePlusG className="fill-white text-sm md:text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
