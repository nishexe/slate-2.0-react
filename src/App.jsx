import { useState } from "react";
import SliderBar from "./components/SliderBar/SliderBar";
import MainCanvas from "./components/MainCanvas/MainCanvas";
import ToolBar from "./components/ToolBar/ToolBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <SliderBar />
      <MainCanvas />
      <ToolBar />
    </div>
  );
}

export default App;
