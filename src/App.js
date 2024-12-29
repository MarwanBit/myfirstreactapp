import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import Header from './Header';
import InputBox from './InputBox';
import {useState} from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("red");


  return (
    <div className="App">
      <Header></Header>
      <Canvas currentColor={currentColor} setCurrentColor={setCurrentColor}></Canvas>
      <InputBox currentColor={currentColor} setCurrentColor={setCurrentColor}></InputBox>
    </div>
  );
}

export default App;
