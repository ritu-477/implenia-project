
"use client";
import React from "react";
import Heading from "./common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { OUR_COMMUNITY_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

const OurCommunity = () => {
  return (
    <div
      id="community"
      className="bg-light-white pt-[129px] pb-[130px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5"
    >
      <div className="container max-w-[1108px] flex flex-col justify-center relative mx-auto">
        <Heading
          customClass="pb-[136px] max-lg:pb-[100px] max-md:pb-[70px] max-sm:pb-[0px] max-lg:text-center"
          title="WHAT OUR COMMUNITY SAYS"
        />
        <div>
          <Swiper
            className="mySwiper"
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            pagination={{
              clickable: true,
            }}
          >
            {OUR_COMMUNITY_LIST.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[795px] flex flex-col justify-center mx-auto">
                  <p className="text-custom-2xl text-center leading-custom-xsm max-md:leading-[100%] mb-[-50px] text-light-yellow tracking-[-0.66px]">
                    “
                  </p>
                  <h3 className="text-center font-semibold leading-custom-lg text-[32px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                    {item.heading}
                  </h3>
                  <div className="flex items-center gap-3.5 max-w-[710px] max-lg:max-w-[unset] max-lg:justify-center mt-[30px] max-md:mt-5 max-sm:mt-[15px] ml-auto w-full">
                    <Image
                      src={item.profile}
                      alt="profile"
                      width={80}
                      height={80}
                      className="max-lg:size-16 max-md:size-14 max-sm:size-12"
                    />
                    <div>
                      <p className="text-light-gray text-custom-sm leading-[100%] font-semibold max-lg:text-xl max-md:text-lg max-sm:text-base">
                        {item.post}
                      </p>
                      <p className="text-black text-custom-sm font-semibold leading-[100%] max-lg:text-xl max-md:text-lg max-sm:text-base">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-[39px]">
                    <CustomButton text="Join the community!" myClass="!text-dark-red h-[56px] max-w-[268px] max-sm:mt-7 max-lg:!mx-auto w-[268px] !border-2 !border-dark-red hover:bg-dark-red hover:!text-white max-md:mt-4 max-sm:mt-2 max-md:w-[220px] max-md:text-lg " />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-prev max-lg:hidden absolute top-1/2 z-10 left-0">
            <Image
              src="/assets/images/svg/left-arrow.svg"
              alt="left-arrow"
              width={17.39}
              height={33.19}
            />
          </button>
          <button className="swiper-next max-lg:hidden absolute right-0 bottom-[21%] z-20 ">
            <Image
              src="/assets/images/svg/right-arrow.svg"
              alt="left-arrow"
              width={17.39}
              height={33.19}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
