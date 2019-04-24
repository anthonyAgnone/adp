import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [xPos, setX] = useState(0);
  const [yPos, setY] = useState(0);
  const [currentScroll, setTop] = useState(0);

  useEffect(() => {
    document.onmousemove = handleMouseMove;
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setTop(window.scrollY);
  };

  const handleMouseMove = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div
      className="newCursor"
      style={{ top: currentScroll + yPos, left: xPos }}
    />
  );
};

export default Cursor;
