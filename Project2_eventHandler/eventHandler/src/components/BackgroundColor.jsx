import { useState, useEffect } from "react";

function BodyColorChange() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [bgColor]);

  const changeColor = () => {
    const colors = ["#feca57", "#48dbfb", "#1dd1a1", "#ff9ff3", "#c8d6e5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <>
      <h2>Body Background Color</h2>
      <button onClick={changeColor}>
        Change Body Color
      </button>
    </>
  );
}

export default BodyColorChange;

