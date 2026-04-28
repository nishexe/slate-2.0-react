import React, { useState } from "react";
import "./SliderBar.css";
function SliderBar() {
  const [value, setValue] = useState(5);
  function handleChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        className="slider"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SliderBar;
