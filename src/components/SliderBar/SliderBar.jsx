import React, { useState } from "react";
import "./SliderBar.css";
function SliderBar({ value, onChange }) {
  function handleChange(e) {
    onChange(Number(e.target.value));
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={value}
        className="slider"
        onChange={handleChange}
      />
    </div>
  );
}

export default SliderBar;
