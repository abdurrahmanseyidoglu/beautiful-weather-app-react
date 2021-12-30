import React from "react";
import Preview from "../../assets/images/Preview.svg";
export const Card = () => {
  return (
    <div className="flex items-center justify-center  ">
      {/* Initial picture */}
      <div className="mt-20 w-96 h-70  shadow-xl flex items-center justify-center rounded-lg">
        <img src={Preview} alt="Previwe" className="w-60 h-60 " />
      </div>
    </div>
  );
};
