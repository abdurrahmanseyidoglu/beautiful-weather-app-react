import { useState,useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Card } from "./elements/Card/Card";
import { Footer } from "./components/Footer/Footer";

import { InputField } from "./elements/InputField/InputField";

function App() {
  //Getting data from InputField component
  const [weatherDataToCard, setWeatherDataToCard] = useState(undefined)
  const [navColor,setNavColor] = useState('bg-gray-400')
  const GetWeatherDataFromInputFieldHandler =(weatherData)=>{
    setWeatherDataToCard(weatherData)

  }
  const GetNavColorFromCardHandler =(navColor)=>{
    setNavColor(navColor)

  }


  //---------------------------------------
  return (
    <div className='App blok flex-col items-center justify-center '>
      <Header onNavColor={navColor}></Header>
      <InputField onGetWeatherDataFromInputField={GetWeatherDataFromInputFieldHandler}></InputField>
      <Card weatherDataToCard={weatherDataToCard} onGetNavColorFromCard={GetNavColorFromCardHandler}></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
