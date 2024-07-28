import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");

  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    if (colorType === "rgb") createRgbColor();
    else createHexColor();
  }, [colorType]);
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function createHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function createRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      className="container mt-5  rounded"
      style={{
        width: "100vh",
        height: "70vh",
        background: color,
      }}
    >
      <h1 className="text-dark p-3">Random Color Generator</h1>
      <div className="d-flex gap-2 justify-content-center pt-3">
        <button onClick={() => setColorType("hex")} className="btn btn-primary">
          Create HEX Color
        </button>
        <button onClick={() => setColorType("rgb")} className="btn btn-primary">
          Create RGB Color
        </button>
        <button
          onClick={() =>
            colorType === "hex" ? createHexColor() : createRgbColor()
          }
          className="btn btn-primary"
        >
          Generate Random Color
        </button>
      </div>
      <div className="mt-5 text-danger">
        <h1 className="text-light">
          {colorType === "rgb" ? "RGB Color" : "Hex Color"}
        </h1>
        <h1 className="text-light">{color}</h1>
      </div>
    </div>
  );
}
