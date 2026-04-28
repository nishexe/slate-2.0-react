import { useState } from "react";
import SliderBar from "./components/SliderBar/SliderBar";
import MainCanvas from "./components/MainCanvas/MainCanvas";
import ToolBar from "./components/ToolBar/ToolBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#FFFFFF");

  return (
    <div className="wrapper">
      <SliderBar value={brushSize} onChange={setBrushSize} />
      <MainCanvas brushSize={brushSize} brushColor={brushColor} />
      <ToolBar onBrushColorChange={setBrushColor} />
    </div>
  );
}

export default App;
