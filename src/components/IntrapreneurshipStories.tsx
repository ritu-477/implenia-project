import React from 'react'
import Heading from './common/Heading'
import CustomButton from './common/CustomButton';
import { STORIES_LIST } from '@/utils/helper';
import Image from 'next/image';

interface StoriesItem {
  image: string;
  imageAlt: string;
  title: string;
}

const IntrapreneurshipStories = () => {
  return (
    <div id="stories" className="pt-32 pb-36 max-md:py-20 max-sm:py-12">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading customClass='max-lg:text-center' title="INTRAPRENEURSHIP STORIES" />
        <div className="max-w-[1103px] mx-auto">
          <div className="flex -mx-[25.5px] max-xl:-mx-3 max-lg:flex-wrap justify-center">
            {STORIES_LIST.map((obj: StoriesItem, i: number) => (
              <div
                key={i}
                className="lg:w-[32.5%] sm:w-1/2 max-sm:w-full px-4 xl:px-[25.5px] max-lg:px-3 pt-[25px]"
              >
                <div className="border border-black rounded-2xl lg:rounded-[28px] h-full overflow-hidden hover:shadow-sm transition-all duration-500">
                  <Image
                    src={obj.image}
                    alt={obj.imageAlt}
                    width={323}
                    height={207}
                    className="w-full max-sm:h-[190px] max-sm:rounded-2xl max-xl:h-[200px] object-cover rounded-2xl lg:rounded-[28px] pointer-events-none"
                  />
                  <p className="font-semibold text-custom-xsm max-lg:text-3xl max-sm:text-2xl leading-custom-xl text-light-black pt-[51px] pb-16 px-6 max-sm:py-9">
                    {obj.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center max-lg:justify-center">
          <CustomButton text="More Stories" myClass="!text-dark-red h-[56px] mt-[39px] max-sm:mt-7 max-lg:!mx-auto w-[268px] !border-2 !border-dark-red hover:bg-dark-red hover:!text-white max-md:mt-4 max-sm:mt-2 max-md:w-[220px] max-md:text-lg lg:ml-10" />
        </div>
      </div>
    </div>
  );
}

export default IntrapreneurshipStories
