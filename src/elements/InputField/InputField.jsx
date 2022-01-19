import axios from "axios";
import React, { useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const url = "http://api.weatherstack.com";
export const InputField = () => {
 const [weatherData,setWeatherData] =  useState({
  temperature:'',
  weatherDescriptions:''
  })
  const [city, setCity] = useState("");

  const onChangeHandler = (e) => {
    setCity(e.target.value);
    console.log(city);
  };
  const onClickHandler = () => {
    axios
      .get(`${url}/current?access_key=${api_key}&query=${city}&units=m`)
      .then((response) => {
        console.log(response.data)
        setWeatherData({
          temperature:response.data.current.temperature ,
          weatherDescriptions:response.data.current.weather_descriptions[0]
        })
      });
  };
   console.log(weatherData);
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
