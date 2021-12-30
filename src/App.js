import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(()=>{
    console.log("This component just re-rendered")
  },[])
  return (
    <div className="App">
      <h1 className="text-9xl text-red-200">HI</h1>
      <input/>
    </div>
  );
}

export default App;