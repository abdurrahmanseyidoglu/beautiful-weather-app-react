import axios from "axios";
import React, { useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const url = "http://api.weatherstack.com";

export const InputField = (props) => {

  const [city, setCity] = useState("");


  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .get(`${url}/current?access_key=${api_key}&query=${city}&units=m`)
      .then((response) => {


        props.onGetWeatherDataFromInputField({
          temperature: response.data.current.temperature,
          weatherDescriptions: response.data.current.weather_descriptions[0],
        });
      })
      .catch((err) => {
        alert(err , city);
      });
    //Sending data to App.jsx file

    //----------------------------
  };

  return (
    <div className='container mx-auto flex flex-col justify-center  items-center mt-10  '>
      <form onSubmit={onSubmitHandler} className='w-full flex items-center justify-center  relitive mr-5' >
        <input
          type='text'
          onChange={(e)=>{onChangeHandler(e)}}
          className='h-10 w-auto  pl-1 pr-20 rounded-lg z-0 focus:shadow focus:outline-none '
          placeholder='Location'
        />
        <button
          type='submit'
          className='h-10 w-20 text-white rounded-lg bg-gray-300 hover:bg-gray-400 absolute ml-56'
        >
          Set
        </button>

      </form>
    </div>
  );
};
