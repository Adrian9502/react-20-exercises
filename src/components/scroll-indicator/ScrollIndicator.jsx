import React, { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setErrorMsg("Error: ", e.errorMsg);
    }
  }
  function handleScrollPercentage() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, [url]);
  if (loading) {
    <h1 className="text-primary">Fetching data..</h1>;
  }
  if (errorMsg) {
    <h1 className="text-primary">Error : {errorMsg}</h1>;
  }

  return (
    <div className="bg-dark">
      <div className="top-container">
        <h1 className="text-primary">Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <h1 className="mt-5 mb-3 text-primary">
        {" "}
        This is from Custom Scroll but it fixed in the whole page
      </h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="card mb-3" style={{ width: "15rem" }}>
                <img
                  src={dataItem.thumbnail}
                  className="card-img-top"
                  alt={dataItem.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{dataItem.title}</h5>
                  <h5 className="card-title">${dataItem.price}</h5>
                  <p className="card-text limit-to-2-lines">
                    {dataItem.description}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
