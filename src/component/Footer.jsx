import React from "react";
import Edutag from "../assets/edutag.png";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center item-center w-full mx-auto mb-5 mt-10">
        <img src={Edutag} className="h-[150px] w-[300px]" alt="" />
      </div>
      <div>asdasd</div>
      <div className="flex justify-center item-center w-full mt--2 py-3 text-white text-sm h-10 bg-[#0B2640]">2023. All rights reserved made by omnidev</div>
    </div>
  );
};
