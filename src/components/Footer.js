import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-8 h-[80px]">
      <div className="md:flex flex-row justify-center items-center md:ml-[90px] text-center mr-[10px]">
        <p className="text-white md:text-lg text-lg">
          Developed & Designed By{" "}
          <span className="text-slate-300 font-bold">Aman Kumar</span> © All Rights
          Reserved
        </p>
      </div>
      <div className="flex md:gap-x-4 md:flex-row mr-[10px]">
        <NavLink to="https://www.linkedin.com/in/aman-kumar-b722a7232/" target="blank">
            <img src="../LinkedIn.png" alt="img" className="md:h-[50px] w-[50px] h-[40px]"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;