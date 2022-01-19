import "./App.css";
import Header from "./components/Header/Header";
import { Card } from "./elements/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { InputField } from "./elements/InputField/InputField";

function App() {
  const [weatherDataToCard, setWeatherDataToCard] = useState()
  const GetWeatherDataFromInputFieldHandler =(weatherData)=>{
    setWeatherDataToCard(weatherData)

  }
  console.log(weatherDataToCard);
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
