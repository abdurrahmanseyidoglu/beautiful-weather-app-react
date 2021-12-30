import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
