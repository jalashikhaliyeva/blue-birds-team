import Image from "next/image";
import React from "react";

function Header({ props }) {
  // Helper function to construct a proper URL
  const getLink = (link) => {
    // If the link starts with "http", return it as is
    if (link.startsWith("http")) return link;
    // If the link does not include a dot, assume it's a name like "twitter"
    if (!link.includes(".")) return `https://${link}.com`;
    // Otherwise, prepend https:// (this case might not occur but just in case)
    return `https://${link}`;
  };

  return (
    <div className="flex justify-between p-0 relative z-10">
      <div className="flex w-[160px] md:w-[240px] p-0">
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
      </div>

      <div className="flex items-center gap-2">
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
