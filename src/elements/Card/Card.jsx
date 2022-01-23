import React from "react";
import { useState, useEffect } from "react";
import Preview from "../../assets/images/Preview.svg";
import Clear from "../../assets/images/Clear.svg";
import Clouds from "../../assets/images/Clouds.svg";
import Rain from "../../assets/images/Rain.svg";
import Snow from "../../assets/images/Snow.svg";


export const Card = ({ weatherDataToCard }) => {
  const [weatherDetails, setWeatherDetails] = useState("");
  const [weatherTemp, setWeatherTemp] = useState("");
  const [imgType, setImgType] = useState(Preview);
  // try usestate to store data
  const [handlingWeatherData, setHandlingWeatherData] = useState("");

  const weather = {
    clear: Clear,
    sunny: Clear,
    "partly cloudy": Clouds,
    cloudy: Clouds,
    rain: Rain,
    snow: Snow,
  };

  useEffect(() => {
    setHandlingWeatherData(weatherDataToCard);

    if (weatherDataToCard === "" || weatherDataToCard === undefined) {
      setImgType(Preview);
    } else if (weatherDataToCard !== undefined) {
      for (const key in weather) {
        if (weatherDataToCard.weatherDescriptions.toLowerCase().includes(key)) {
          setImgType(weather[key]);
          setWeatherDetails(weatherDataToCard.weatherDescriptions);
          setWeatherTemp(weatherDataToCard.temperature);
        }
      }
    }
  }, [weatherDataToCard]);

  return (
    <div>
      <div className='flex items-center justify-center   '>
        <div className='mt-20 w-1/2  h-80  shadow-xl flex flex-row  place-content-evenly  rounded-lg bg-gray-200 p-3 '>
          <div className='img-container flex items-center justify-center '>
            <img src={imgType} alt='Previwe' className='w-40 h-40 ' />
          </div>
          <div className='weather-details flex flex-col items-center justify-center'>
            <h1 className='font-bold	text-2xl'>{weatherTemp}°</h1>
            <h2 className='font-bold	text-2xl'>{weatherDetails}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex items-center justify-center  ">
        <div className="mt-20 w-96 h-70  shadow-xl flex items-center justify-center rounded-lg">
          <img src={Preview} alt="Previwe" className="w-60 h-60 " />
        </div>
      </div> */
}
