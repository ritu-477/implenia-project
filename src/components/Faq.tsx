"use client";
import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import { FaqIcon } from "@/utils/icons";

interface FaqAnswerItem {
    title: string;
    description: string;
  }

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? false : index);
  };
  return (
    <div className="bg-light-white pt-[128px] pb-[146px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5">
      <div className="max-w-[1090px] container mx-auto">
        <Heading customClass="pb-[9px] max-lg:text-center" title="FAQs" />
        {FAQ_LIST.map((obj: FaqAnswerItem, index: number) => (
          <div
            key={index}
            className="overflow-hidden border-b-[1px] border-solid border-darkGray"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="text-custom-sm font-semibold text-left py-3 leading-[100%] gap-2 max-lg:text-xl max-md:text-lg max-sm:text-base text-black flex justify-between items-center w-full"
            >
              {obj.title}
              <span
                className={`${
                  openIndex === index
                    ? "rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }`}
              >
                <FaqIcon />
              </span>
            </button>
            <div
              className={`${
                openIndex === index
                  ? "max-h-20 max-md:max-h-28 pb-3.5"
                  : "max-h-0"
              } transition-all duration-500 overflow-hidden`}
            >
              <Description title={obj.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
