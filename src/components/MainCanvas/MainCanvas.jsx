import React, { useRef, useEffect } from "react";
import "./MainCanvas.css";

function MainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let prevWidth = 0;
    let prevHeight = 0;

    const initCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = "#dc4343";
      ctx.fillRect(0, 0, width, height);
    };

    const observer = new ResizeObserver(initCanvas);
    observer.observe(canvas);

    initCanvas();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default MainCanvas;
