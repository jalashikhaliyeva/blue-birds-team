import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
function Header({ props }) {
  return (
    <div className="flex justify-between p-0">
      <div className="flex w-[160px] md:w-[240px] p-0">
        <Image
          src={props.main.image}
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
        {props.social_link &&
          props.social_link.map((social, index) => (
            <a
              key={index}
              href={
                social.link.startsWith("http")
                  ? social.link
                  : `https://${social.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mainColorDark p-2 rounded-lg cursor-pointer"
            >
              <Image
                src={social.icon}
                alt="social icon"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
            </a>
          ))}
      </div>
    </div>
  );
}

export default Header;
