import React,{ useState } from "react";


import { InputField } from "../../elements/InputField/InputField";

export const SearchBar = () => {
  const [storeWeatherData, setStoreWeatherData] = useState('')
  const getWeatherDataHandler =(weatherData)=>{
    console.log(weatherData)
  }
  // console.log(storeWeatherData);
  return (
    <div className="container mx-auto flex flex-col justify-center  items-center mt-10 ">
      <div className="relative">
        <div className="absolute top-4 left-3"> </div>
        <InputField onGetWeatherData={getWeatherDataHandler}></InputField>
        <div className="absolute top-2 right-2"></div>

      </div>
    </div>
  );
};
