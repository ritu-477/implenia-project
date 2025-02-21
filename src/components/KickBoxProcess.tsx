import React from "react";
import Heading from "./common/Heading";
import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "./common/CustomButton";
import Description from "./common/Description";

interface KickboxProcessItem {
    image: string;
    imageAlt: string;
    subTitle: string;
    title: string;
    description: string;
    boxDuration: string;
    budget: string;
}

const KickboxProcess = () => {
    return (
        <div className="xl:pt-[129px] xl:pb-36 lg:py-28 md:py-20 py-12">
            <div className="max-w-[1172px] mx-auto px-5">
                <Heading title="KICKBOX PROCESS" customClass="pb-[17px] max-lg:text-center" />
                <Description customClass="xl:max-w-[1090px] w-full max-lg:text-center lg:pb-12 pb-8" title="The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors." />
                <div className="flex justify-center flex-wrap max-w-[1077px] mx-auto items-center gap-[51px] max-lg:gap-10">
                    {KICKBOX_PROCESS_LIST.map((obj: KickboxProcessItem, i: number) => (
                        <div
                            key={i}
                            className="max-w-[323px] flex justify-center gap-y-[39px] max-md:gap-y-7 items-center flex-col"
                        >
                            <Image
                                src={obj.image}
                                width={227}
                                height={92}
                                alt={obj.imageAlt}
                                className="mx-auto max-md:w-[150px] max-md:h-[60px] pointer-events-none"
                            />
                            <div className="border border-black rounded-[28px] px-4 xl:px-6 pt-8 max-sm:p-4 pb-[19px] mt-[39px] max-md:mt-7 max-sm:mt-4 h-full">
                                <p
                                    className={`${i === 0
                                        ? "!text-dark-red"
                                        : i === 1
                                            ? "text-light-blue"
                                            : "text-light-yellow"
                                        } sm:text-custom-sm text-base font-semibold text-light-black leading-[100%]`}
                                >
                                    {obj.subTitle}
                                </p>
                                <h4 className="font-semibold text-custom-xsm max-md:text-3xl max-sm:text-2xl leading-custom-xl py-2 max-sm:pt-0 max-sm:pb-1">
                                    {obj.title}
                                </h4>

                                <p className="sm:text-custom-sm tracking-[-0.28px] text-base font-light text-light-black leading-custom-2xl pb-7 max-sm:pb-5">
                                    {obj.description}
                                </p>
                                <p className="sm:text-custom-sm tracking-[-0.28px] text-base font-light text-light-black leading-custom-2xl"> {obj.boxDuration} </p>
                                <p className="sm:text-custom-sm tracking-[-0.28px] max-w-[251px] text-base font-light text-light-black leading-custom-2xl"> {obj.budget} </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center max-xl:justify-center">
                    <CustomButton text="Start your RedBox!" myClass="!text-dark-red h-[56px] mt-[39px] max-sm:mt-7 max-lg:!mx-auto w-[268px] !border-2 !border-dark-red hover:bg-dark-red hover:!text-white max-md:mt-4 max-sm:mt-2 max-md:w-[220px] max-md:text-lg xl:ml-12" />
                </div>
            </div>
        </div>
    );
};

export default KickboxProcess;