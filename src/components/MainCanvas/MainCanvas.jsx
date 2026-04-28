import React, { useRef, useEffect } from "react";
import "./MainCanvas.css";

function MainCanvas({ brushSize, brushColor, clearFlag }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const brushSizeRef = useRef(brushSize);
  const brushColorRef = useRef(brushColor);

  useEffect(() => {
    brushSizeRef.current = brushSize;
  }, [brushSize]);

  useEffect(() => {
    brushColorRef.current = brushColor;
  }, [brushColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const initCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = "#0a0e14";
      ctx.fillRect(0, 0, width, height);

      ctx.lineCap = "round";
    };

    const observer = new ResizeObserver(initCanvas);
    observer.observe(canvas);
    initCanvas();

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseDown = (e) => {
      isDrawing.current = true;
      lastPos.current = getPos(e);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing.current) return;

      const pos = getPos(e);

      ctx.lineWidth = brushSizeRef.current;
      ctx.strokeStyle = brushColorRef.current;

      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();

      lastPos.current = pos;
    };

    const stopDrawing = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      observer.disconnect();
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    ctx.fillStyle = "#0a0e14";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [clearFlag]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default MainCanvas;
