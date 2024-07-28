import React, { useRef } from "react";
import UseFetch from "../useFetch-custom/UseFetch";
export default function ScrollToTopAndBottom() {
  const bottomRef = useRef();
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  if (pending) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return <h1>Error..</h1>;
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="container p-3 mt-5 bg-dark text-light">
      <h1>Scroll to Top and Bottom</h1>
      <h3 className="p-3 bg-light text-dark mt-4">This is the top section</h3>

      <button onClick={() => handleScrollBottom()} className="btn btn-primary">
        Scroll to bottom
      </button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <h3 className="text-light">{productItem.title}</h3>
            ))
          : null}
      </ul>
      <button onClick={() => handleScrollTop()} className="btn btn-primary">
        Scroll to top
      </button>
      <div ref={bottomRef}></div>
      <h3 className="p-3 bg-light text-dark mt-4">
        This is the bottom section
      </h3>
    </div>
  );
}
// resume 5:11
