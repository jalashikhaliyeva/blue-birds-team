import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex w-[160px] md:w-[220px]">
        <Image
          src="/images/logo/logo2.png"
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
          <FaFacebookF className="fill-white text-lg md:text-2xl" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaInstagram className="fill-white text-lg md:text-2xl" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaTwitter className="fill-white text-lg md:text-2xl" />
        </div>
        <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
          <FaGooglePlusG className="fill-white text-lg md:text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
