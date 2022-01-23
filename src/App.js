import { useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Card } from "./elements/Card/Card";
import { Footer } from "./components/Footer/Footer";

import { InputField } from "./elements/InputField/InputField";

function App() {
  //Getting data from InputField component
  const [weatherDataToCard, setWeatherDataToCard] = useState(undefined)
  const GetWeatherDataFromInputFieldHandler =(weatherData)=>{
    setWeatherDataToCard(weatherData)
    console.log("parent");
  }

  //---------------------------------------
  return (
    <div className='App'>
      <Header></Header>
      <InputField onGetWeatherDataFromInputField={GetWeatherDataFromInputFieldHandler}></InputField>
      <Card weatherDataToCard={weatherDataToCard}></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
