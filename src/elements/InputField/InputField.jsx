import axios from "axios";
import React, { useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const url = "http://api.weatherstack.com";

// console.log(`${url}/current?access_key=${api_key}&query=${query}`)
export const InputField = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState();
  const [weatherDescriptions, setWeatherDescriptions] = useState();
  const onChangeHandler = (e) => {
    setCity(e.target.value);
    console.log(city);
  };
  const onClickHandler = () => {
    axios
      .get(`${url}/current?access_key=${api_key}&query=${city}&units=m`)
      .then((response) => {
        console.log(response.data)

        setTemperature(response.data.current.temperature);
        setWeatherDescriptions(response.data.current.weather_descriptions[0]);
      });
  };
   console.log(temperature,weatherDescriptions);
  return (
    <div>
      <input
        type='text'
        onChange={onChangeHandler}
        className='h-10 w-70 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
        placeholder='Location'
      />
      <button
        onClick={onClickHandler}
        className='h-10 w-20 text-white rounded-lg bg-gray-300 hover:bg-gray-400'
      >
        Set
      </button>
    </div>
  );
};
