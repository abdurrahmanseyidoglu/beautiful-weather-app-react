import "./App.css";
import Header from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Card } from "./elements/Card/Card";
import { Footer } from "./components/Footer/Footer";






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
