import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
import Container from "../Container";
import Image from "next/image";
import { postSubscription } from "../../lib/api";
import { toast } from "react-toastify"; // Only import toast here

function Footer({ props }) {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address.");
        return;
      }
      try {
        await postSubscription(email);
        toast.success("Subscription successful!");
        setIsEditing(false);
      } catch (error) {
        toast.error("There was an error subscribing. Please try again.");
      }
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center py-20 relative">
        <Image
          src={`/images/birds-heads/head1.webp`}
          alt="Bird head"
          className="w-[200px] absolute top-[20px] right-[910px] z-[99] scale-x-[-1] hidden lg:block"
          width={200}
          height={200}
        />
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="w-[220px]">
            {/* <Image
              src={props.main.image}
              alt="Logo Blue Birds"
              layout="shift"
              placeholder="blur"
              width={200}
              height={200}
              blurDataURL="/images/blur/blur.avif"
              className="w-full"
            /> */}
          </div>
          <div className="flex items-center gap-2 mt-4">
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
              onKeyDown={handleKeyDown}
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
