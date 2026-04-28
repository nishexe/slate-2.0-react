import React from "react";
import "./ToolBar.css";

function ToolBar({ onBrushColorChange, onClear }) {
  return (
    <div className="toolbar">
      <button
        className="wiper-btn"
        onClick={() => onBrushColorChange("#0a0e14")}
      >
        WIPER
      </button>

      <button
        className="lime-btn"
        onClick={() => onBrushColorChange("#c2d647")}
      />
      <button
        className="blue-btn"
        onClick={() => onBrushColorChange("#87cefa")}
      />
      <button
        className="white-btn"
        onClick={() => onBrushColorChange("#ffffff")}
      />
      <button
        className="orange-btn"
        onClick={() => onBrushColorChange("#d85c14")}
      />
      <button
        className="yellow-btn"
        onClick={() => onBrushColorChange("#ffb454")}
      />

      <button className="clear-btn" onClick={onClear}>
        CLEAR
      </button>
    </div>
  );
}

export default ToolBar;
