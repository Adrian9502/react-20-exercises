import React, { useRef, useState } from "react";
import UseOutsideClick from "./UseOutsideClick";

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));
  return (
    <div className="container rounded bg-dark p-3 mt-5 text-light">
      <h1 className="text-primary mb-4">Use Outside Click custom hook</h1>
      {showContent ? (
        <div
          className="container rounded bg-dark p-3 mt-5 text-light"
          ref={ref}
        >
          <h1>This is a random content</h1>
          <h4>
            Click <i className="text-danger">!inside</i> to close this.
          </h4>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}
