import React from "react";

interface DescriptionProps {
  title: string;
  customClass?: string; 
}

const Description: React.FC<DescriptionProps> = ({ title,customClass }) => {
  return (
    <p className={`sm:text-custom-sm tracking-[-0.28px] text-base font-light text-light-black leading-custom-2xl${customClass || ""}`}>
      {title} 
    </p>
  );
};

export default Description;