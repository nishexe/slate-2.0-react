import React, { useRef, useEffect } from "react";
import "./MainCanvas.css";

function MainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const initCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // console.log(`Canvas Offset Height is : ${canvas.offsetHeight}`);
      ctx.fillStyle = "#dc4343";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    initCanvas();

    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MainCanvas;
