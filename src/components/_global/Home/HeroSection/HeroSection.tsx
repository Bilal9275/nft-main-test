import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import { Button } from "@/components/ui/button";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { NFTCarousel } from "./NFTCarousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttons, nfts, socials } from "./constant";
import Link from "next/link";
import Images from "@/Assets/index";
const Home_Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        style={{
          background: "url(/background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          // maxHeight: '100vh'
        }}
        className="py-10"
      >
        <section className="container">
          <Image src={Images.logo} alt="logo"/>
          <div className={styles.heroSectionContainer}>
            <div className={styles.heroSection}>
              <div className="space-y-5 w-full flex flex-col justify-center items-center">
                <div className="space-x-3 flex justify-center items-center flex-wrap gap-5">
                {buttons.map((button) => (
        <Link
          href={button.link ?? "/comingsoon"}
          key={button.id}
        >
          <div
            className={cn(
              "w-[150px] h-[120px] flex justify-center items-center bg-no-repeat font-bold text-xl uppercase cursor-pointer",
              button.name === "Bundle"
                ? "text-[#8A366E]"
                : "text-white",
              {
                "hover:shadow-md": isHovered // Apply shadow on hover
              }
            )}
            style={{
              backgroundImage: `url(${button.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {button.name}
          </div>
        </Link>
      ))}
                  {/* {buttons.map((button) => {
                    return (
                      <>
                        <Link
                          href={button.link ?? "/comingsoon"}
                          key={button.id}
                        >
                          <div
                            className={cn(
                              "w-[150px] h-[120px] flex justify-center items-center bg-no-repeat font-bold text-xl uppercase cursor-pointer",
                              button.name === "Bundle"
                                ? "text-[#8A366E]"
                                : "text-white"
                            )}
                            style={{
                              backgroundImage: `url(${button.image})`,
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            {button.name}
                          </div>
                        </Link>
                      </>
                    );
                  })} */}
                </div>
                {/* MINT TEXT */}
                <div className="text-center font-extrabold text-6xl text-[#fdd122] drop-shadow-md">
                  MINT OUR NFTS
                </div>
                {/* SLIDER */}
                <div className=" w-full max-w-xl">
                  <NFTCarousel
                    nfts={nfts}
                    conWidth="xl"
                    cardLimitMd={"4"}
                    cardLimitLg={"5"}
                  />
                </div>
                {/* Socials */}
                <div className="flex justify-center items-center flex-col">
                  <h4 className=" font-bold text-xl text-white tracking-widest italic ">
                    JOIN OUR COMMUNITY HERE
                  </h4>
                  <div className="space-x-2 flex items-center  self-end ">
                    {socials.map((Social, key) => {
                      return (
                        <>
                          <a href={Social.link} target="_blank">
                            <Social.Icon
                              key={key}
                              color="white"
                              size="50"
                              className="bg-blue-400 p-3 rounded-full cursor-pointer"
                            />
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home_Header;
