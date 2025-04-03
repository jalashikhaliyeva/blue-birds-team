import Image from "next/image";
import React from "react";

function Header({ props }) {
  // Helper function to construct a proper URL
  const getLink = (link) => {
    if (link.startsWith("http")) return link;
    if (!link.includes(".")) return `https://${link}.com`;
    return `https://${link}`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between p-0 relative z-10">
      {/* <div className="hidden  md:flex mx-auto md:mx-0 w-[160px] md:w-[240px] p-0">
        <Image
          src={props.main.image}
          alt="Logo Blue Birds"
          layout="responsive"
          placeholder="blur"
          width={200}
          height={200}
          blurDataURL="/images/blur/blur.avif"
          className="w-full"
        />
      </div> */}
      <div className="flex  mx-auto md:mx-0 w-[160px] md:w-[240px] p-0">
        <Image
          src='/images/logo/logo-3.png'
          alt="Logo Blue Birds"
          layout="responsive"
          placeholder="blur"
          width={200}
          height={200}
          blurDataURL="/images/blur/blur.avif"
          className="w-full"
        />
      </div>

      {/* Hidden on mobile, visible on md+ */}
      <div className="hidden md:flex items-center gap-2">
        {props.social_link &&
          props.social_link.map((social, index) => (
            <a
              key={index}
              href={getLink(social.link)}
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
