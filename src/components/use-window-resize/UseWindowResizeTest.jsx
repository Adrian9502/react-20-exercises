import React from "react";
import UseWindowResize from "./UseWindowResize";

function UseWindowResizeTest() {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;
  return (
    <div className="container rounded bg-dark p-3 mt-5 text-light">
      <h1>Use Window Size Hook</h1>
      <div className="container bg-light text-dark p-3 rounded">
        <h3 className="text-dark">
          Width is{" "}
          <i className="text-danger">
            <b>{width}</b>
          </i>
        </h3>
        <h3 className="text-dark">
          Height is{" "}
          <i className="text-danger">
            <b>{height}</b>
          </i>
        </h3>
      </div>
    </div>
  );
}

export default UseWindowResizeTest;
