import Image from "next/image";
import React from "react";
import Header from "./common/Header";
import CustomButton from './common/CustomButton';

const Hero = () => {
  return (
    <div className=" bg-cover bg-right hero-bg-image bg-no-repeat bg-hero-bg">
      <Header />
      <div
        id="hero"
        className="flex justify-center items-center min-h-[662px] max-sm:min-h-[600px] relative max-xl:px-5 max-xl:bg-black/50"
      >
        <Image
          src={"/assets/images/webp/dustbin.webp"}
          alt="hero-image"
          width={375}
          height={562}
          className="absolute pointer-events-none hero-image md:top-[70%] lg:top-[65%] xl:top-[64%] top-[74%] max-xl:max-w-[240px] max-xl:max-h-[400px] -translate-y-1/2 left-0"
        />
        <div className="container max-w-[1138px]">
          <p className="font-bold text-custom-sm relative text-white leading-[100%] text-shadow max-xl:text-center">
            Shape the future of Implenia!
          </p>
          <h1 className="font-bold text-custom-lg leading-custom-sm max-lg:text-6xl max-md:text-5xl max-sm:text-4xl relative max-xl:mx-auto max-w-[600px] text-shadow text-white max-xl:text-center">
            WE ARE LOOKING FOR YOUR IDEA
          </h1>
          <div className="max-xl:flex justify-center !mt-[25px]">
            <CustomButton text="Bring your idea to life!" myClass="max-xl:mx-auto hover:!text-black hover:!bg-white border-white border-2 whitespace-nowrap max-w-[312px] min-h-[67px] w-full max-lg:max-w-[224px] max-lg:min-h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
