
"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Image from "next/image";

const HowItWorks = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div
      id="community"
      className="bg-light-white pt-[128px] pb-[144px] max-lg:py-28 max-md:py-20 max-sm:py-16 flex justify-center items-center px-5"
    >
      <div className="container max-w-[1118px] ">
        <Heading
          customClass="mb-16 max-lg:mb-12 max-md:mb-10 max-sm:mb-8 max-sm:text-center"
          title="HOW IT WORKS"
        />
        <div
          className="flex justify-center items-center w-full"
          onClick={() => setPlayVideo(!playVideo)}
        >
          {!playVideo ? (
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/webp/works-image.webp"}
                alt="youtube video"
                width={1064}
                height={580}
                className="max-xl:h-[550px] max-lg:h-[450px] max-md:h-[300px] max-sm:h-[300px] max-[500px]:h-[250px] max-[400px]:h-[200px] rounded-[25px] max-md:rounded-2xl max-xl:w-full max-xl:max-w-[1064px]"
              />
              <div className="w-[34.96%] h-[24.83%] bg-dark-yellow absolute max-sm:top-2 top-6 flex justify-center items-center left-[29px]">
                <p className="text-custom-sm max-lg:text-xl max-md:text-base max-md:leading-4 max-sm:text-[8px] max-sm:leading-3 !leading-[100%] text-black text-center font-bold">
                  VIDEO CAN BE EXCHANGED FOR CAMPAIGNS. <br />
                  <br className="max-lg:hidden" /> -Title: Name of Campaign{" "}
                  <br /> -Button: Join the campaign!
                </p>
              </div>
            </div>
          ) : (
            <iframe
            width="100%"
            height="580"
            className="max-xl:h-[550px] max-lg:h-[450px] max-md:h-[300px] max-sm:h-[300px] max-[500px]:h-[250px] max-[400px]:h-[200px] rounded-[25px] max-md:rounded-2xl"
            src="https://www.youtube.com/embed/TVW9kwN6Lu4?autoplay=1"
            title="IMPLENIA HEALTH & SAFETY AWARDS 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
