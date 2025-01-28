import { useState, useEffect } from "react";

function randomColorUtility(length) {
  return Math.floor(Math.random() * length);
}

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);
    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
