import { useState, useEffect } from "react";

// convert RGB to Hex
function rgbToHex(rgb) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  const RGB = rgb.match(/\d+/g);
  console.log(RGB);

  return (
    "#" +
    componentToHex(+RGB[0]) +
    componentToHex(+RGB[1]) +
    componentToHex(+RGB[2])
  );
}
// convert Hex to RGB
function hexToRGB(hex) {
  const digitArray = hex.match(/\w/g);

  return `rgb(${parseInt(digitArray[0] + digitArray[1], 16)},${parseInt(digitArray[2] + digitArray[3], 16)},${parseInt(digitArray[4] + digitArray[5], 16)})`;
}

export default function RandomColor() {
  const startingColor = randomHex();

  const [colorType,setColorType] = useState("hex");
  const [color, setColor] = useState(startingColor);

  function randomHex() {
    let rngHex = Math.floor(Math.random() * 16777215).toString(16);
    while (rngHex.length < 6) {
      rngHex = "0" + rngHex;
    }
    return "#" + rngHex;
  }

  function handleCreateRNGColor() {
    setColor(colorType === "hex"? randomHex(): hexToRGB(randomHex()));
  }
  function handleChangeToHex(){
    if(colorType != "hex"){
        setColorType("hex")
        setColor(rgbToHex(color))}
  }

  function handleChangetoRGB(){
    if(colorType != "RGB"){
        setColorType("RGB");
        setColor(hexToRGB(color))
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={handleChangeToHex}>Create HEX color</button>
      <button onClick={handleChangetoRGB}>Create RGB color</button>
      <button onClick={() => handleCreateRNGColor()}>
        Create Random color
      </button>
      <div>
        <h2>{colorType} color</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
