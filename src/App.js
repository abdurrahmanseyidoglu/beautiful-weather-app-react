import "./App.css";
import Header from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Card } from "./elements/Card/Card";
import { Footer } from "./components/Footer/Footer";

const api_key = process.env.REACT_APP_WEATHER_API_KEY
const url = "http://api.weatherstack.com"
let query = ""
console.log(`${url}/current?access_key=${api_key}&query=${query}`)




function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
