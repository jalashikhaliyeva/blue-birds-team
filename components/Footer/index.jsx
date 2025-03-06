import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
import Container from "../Container";
import Image from "next/image";

function Footer() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <Container>
      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center py-20 relative">
        <Image
          src={`/images/birds-heads/1.png`}
          alt="Bird head"
          className="w-[200px] absolute top-[20px] right-[810px] z-[99] scale-x-[-1] hidden lg:visible"
          width={200}
          height={200}
        />
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="w-[220px]">
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
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
              <FaFacebookF className="fill-white text-2xl" />
            </div>
            <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
              <FaInstagram className="fill-white text-2xl" />
            </div>
            <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
              <FaTwitter className="fill-white text-2xl" />
            </div>
            <div className="bg-mainColorDark text-white p-2 rounded-lg cursor-pointer">
              <FaGooglePlusG className="fill-white text-2xl" />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <p className="uppercase text-mainColorDark text-3xl font-medium font-oswald">
            Sign Up for our latest news
          </p>
          {isEditing ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              placeholder="Your mail"
              className="uppercase text-mainColorDark text-2xl font-thin font-oswald pt-5 outline-none"
            />
          ) : (
            <p
              className="uppercase text-mainColorDark text-2xl pt-5 font-thin font-oswald cursor-text"
              onClick={() => setIsEditing(true)}
            >
              {email || "Your mail"}
            </p>
          )}
          <p className="border-b border-mainColorDark border-4 mt-8"></p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
