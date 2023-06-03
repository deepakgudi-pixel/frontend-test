import { useState } from "react";
import "./CustomCursor.scss";

export default function CustomCursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const onMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  window.addEventListener("mousemove", onMouseMove);

  return (
    <div
      className="cursor"
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
      }}
    ></div>
  );
}
