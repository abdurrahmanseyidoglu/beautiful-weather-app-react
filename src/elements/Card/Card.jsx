import React from "react";
import { useState, useEffect } from "react";
import Preview from "../../assets/images/Preview.svg";
import Clear from "../../assets/images/Clear.svg";
import Clouds from "../../assets/images/Clouds.svg";
import Rain from "../../assets/images/Rain.svg";
import Snow from "../../assets/images/Snow.svg";
import PartlyCloud from "../../assets/images/PartlyCloud.svg";

export const Card = (props) => {
  const [weatherDetails, setWeatherDetails] = useState("");
  const [weatherTemp, setWeatherTemp] = useState("");
  const [imgType, setImgType] = useState(Preview);
  const [toggleCard, setToggleCard] = useState(true);

  // try usestate to store data
  const [handlingWeatherData, setHandlingWeatherData] = useState("");

  const weather = {
    clear: [Clear, "yellow"],
    sunny: [Clear, "yellow"],
    partly: [PartlyCloud, "#9DA8DF"],
    cloudy : [Clouds, "#9DA8DF"],
    overcast:[Clouds, "#9DA8DF"],
    rain: [Rain, "#4973D1"],
    snow: [Snow, "#F6F8FF"],
  };

  useEffect(() => {
    setHandlingWeatherData(props.weatherDataToCard);

    if (
      props.weatherDataToCard === "" || props.weatherDataToCard === undefined) {
      setImgType(Preview);
    }
    else if (props.weatherDataToCard !== undefined) {
      console.log(props.weatherDataToCard);
      for (const key in weather) {
        console.log("key= ", key);
        console.log(
          "weatherDataToCard.weatherDescriptions",
          props.weatherDataToCard.weatherDescriptions.toLowerCase()
        );
        if (
          props.weatherDataToCard.weatherDescriptions
            .toLowerCase()
            .includes(key)
        ) {
          setImgType(weather[key][0]);
          setWeatherDetails(props.weatherDataToCard.weatherDescriptions);
          setWeatherTemp(`${props.weatherDataToCard.temperature}°`);
          setToggleCard(false);
          props.onGetNavColorFromCard(weather[key][1]);
        }
      }
    }
  }, [props.weatherDataToCard]);

  return (
    <div>
      <div className='flex items-center justify-center  '>
        <div
          className={
            toggleCard
              ? "hidden"
              : "mt-20 w-1/2  h-80  shadow-xl flex flex-row  place-content-evenly  rounded-lg bg-gray-200 p-3 "
          }
        >
          <div className='img-container flex items-center justify-center '>
            <img src={imgType} alt='Previwe' className='w-32 h-32 ' />
          </div>
          <div className='weather-details flex flex-col items-center justify-center place-content-between'>
            <h1 className='font-bold	text-7xl text-gray-800 '>{weatherTemp}</h1>
            <h2 className='font-semibold	text-2xl text-gray-800'>
              {weatherDetails}
            </h2>
          </div>
        </div>
        <div
          className={
            toggleCard
              ? "mt-20 w-1/2  h-80  shadow-xl flex flex-row  place-content-evenly  rounded-lg bg-gray-200 p-3 "
              : "hidden"
          }
        >
          <div className='mt-20 w-96 h-70   flex items-center justify-center rounded-lg'>
            <img src={Preview} alt='Previwe' className='w-60 h-60 ' />
          </div>
        </div>
      </div>
    </div>
  );
};
