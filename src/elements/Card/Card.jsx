import React from "react";
import { useState } from "react";
import Preview from "../../assets/images/Preview.svg";
import Clear from "../../assets/images/Clear.svg";
import CloudWind from "../../assets/images/Cloud-wind.svg";
import Clouds from "../../assets/images/Clouds.svg";
import Drizzle from "../../assets/images/Drizzle.svg";
import Moon from "../../assets/images/Moon.svg";
import NightRainy from "../../assets/images/Night-rainy.svg";
import Night from "../../assets/images/Night.svg";
import Rain from "../../assets/images/Rain.svg";
import Snow from "../../assets/images/Snow.svg";
import ThunderStorm from "../../assets/images/Thunderstorm.svg";
import Tornado from "../../assets/images/Tornado.svg";
// import IMAGES from "../../assets/images/Images"

export const Card = ({weatherDataToCard}) => {
  const [imgType,setImgType] = useState(Preview)
  console.log(weatherDataToCard);

  const weatherColors={
    sunny : 'yellow',

  }


  return (
    <div>
      <div className="flex items-center justify-center   ">
        {/* Initial picture */}
        <div className="mt-20 w-1/4  h-80  shadow-xl flex items-center justify-center rounded-lg bg-gray-200">
          <img
            src= {imgType}
            alt="Previwe"
            className="w-60 h-60 "
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-center  ">
        <div className="mt-20 w-96 h-70  shadow-xl flex items-center justify-center rounded-lg">
          <img src={Preview} alt="Previwe" className="w-60 h-60 " />
        </div>
      </div> */}
    </div>
  );
};
