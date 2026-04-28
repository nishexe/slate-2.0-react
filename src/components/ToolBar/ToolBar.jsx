import React from "react";
import "./ToolBar.css";

function ToolBar() {
  return (
    <div className="toolbar">
      <button className="wiper-btn">WIPER</button>
      <button className="lime-btn"></button>
      <button className="blue-btn"></button>
      <button className="white-btn"></button>
      <button className="orange-btn"></button>
      <button className="yellow-btn"></button>
      <button className="clear-btn">CLEAR</button>
    </div>
  );
}

export default ToolBar;
