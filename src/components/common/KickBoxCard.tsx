
"use client";
import { KICKBOX_LIST } from "@/utils/helper";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomButton from "./CustomButton";
import Heading from "./Heading";
import Description from "./Description";

const KickboxCard = () => {
    const [count, setCount] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCount(inView),
    });

    React.useEffect(() => {
        if (inView) {
            setCount(true);
        }
    }, [inView]);

    return (
        <div id="community" className="pt-[134px] pb-[129px] max-lg:py-20 max-md:py-[60px] overflow-hidden">
            <div className="max-w-[1090px] max-xl:px-4 mx-auto">
                <Heading customClass="max-lg:text-center" title="IMPLENIA KICKBOX" />
                <Description customClass="!max-w-[1090px] tracking-[-0.28px] pt-4 max-md:pt-2 max-lg:text-center" title="Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!"/>
                <div ref={ref} className="flex sm:gap-x-12 gap-x-9 gap-y-5 flex-wrap items-center justify-between pt-[47px] max-lg:pt-5 max-md:justify-center">
                    {KICKBOX_LIST.map((obj, i) => (
                        <div key={i} className="flex flex-col max-md:items-center max-md:justify-center" >
                            <p className="text-5xl lg:text-custom-xl md:text-6xl leading-custom-md tracking-[-0.66px] text-light-yellow">+
                                <CountUp start={0} end={count && i === 0 ? 155 : count && i === 1 ? 325 : count && i === 2 ? 250 : 0} duration={3} />
                            </p>
                            <p className="md:text-custom-sm text-base font-bold leading-[100%]">{obj.description} </p>
                        </div>
                    ))}
                    <div className="flex items-center justify-center">
                        <CustomButton text="Submit your idea!" myClass="!text-dark-red h-14 w-[268px] !border-2 !border-dark-red hover:bg-dark-red hover:!text-white max-md:mt-4 max-sm:mt-2 max-md:w-[220px] max-md:text-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KickboxCard
