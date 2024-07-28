import React, { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "violet",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blueviolet",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
  ];

  function handleScroll() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }
  return (
    <div className="container p-3 rounded  mt-5 bg-dark text-light">
      <h1>Scroll to particular section</h1>
      <button onClick={handleScroll} className="btn btn-primary mb-3">
        Click to scroll
      </button>
      {data.map((dataItem, index) => (
        <div
          ref={index === 3 ? ref : null}
          className="rounded"
          style={dataItem.style}
        >
          <h3 className="text-primary">{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
