import React from "react";

interface CustomButtonProps {
    text: string;
    myClass?: string;
    customOnClick?: () => void;

}

const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "", customOnClick, }) => {
    return (
        <button
            onClick={customOnClick}
            className={`text-customSm font-bold lg:py-[16.9px] lg:px-[52.4px] py-2 md:px-8 px-6 border border-white rounded-[47px] text-white transition-all duration-500  ${myClass}
`}
        >
            {text}
        </button >
    );
};

export default CustomButton;