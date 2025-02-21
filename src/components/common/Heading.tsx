import React from "react";
interface HeadingProps {
  title: string;
  customClass?: string; 
}

const Heading: React.FC<HeadingProps> = ({ title,customClass}) => {
  return (
    <h2 className={`lg:text-custom-md leading-custom-lg font-bold md:text-4xl text-3xl text-light-black ${customClass || ""}`}>
      {title}
    </h2>
  );
};

export default Heading;
