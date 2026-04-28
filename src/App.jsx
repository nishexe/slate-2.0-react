import { useState } from "react";
import SliderBar from "./components/SliderBar/SliderBar";
import MainCanvas from "./components/MainCanvas/MainCanvas";
import ToolBar from "./components/ToolBar/ToolBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#FFFFFF");

  const [clearFlag, setClearFlag] = useState(false);

  const handleClear = () => {
    setClearFlag((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <SliderBar value={brushSize} onChange={setBrushSize} />
      <MainCanvas
        brushSize={brushSize}
        brushColor={brushColor}
        clearFlag={clearFlag}
      />
      <ToolBar onBrushColorChange={setBrushColor} onClear={handleClear} />
    </div>
  );
}

export default App;
