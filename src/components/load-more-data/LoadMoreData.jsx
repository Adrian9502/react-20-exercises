import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function LoadMoreData() {
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // State to store products
  const [products, setProducts] = useState([]);
  // State to manage the count of products loaded
  const [count, setCount] = useState(0);
  // State to disable the load more button
  const [disableButton, setDisableButton] = useState(false);

  // Ref to track the last product element
  const lastProductRef = useRef(null);

  // Function to fetch products from the API
  async function fetchProducts() {
    try {
      setLoading(true); // Set loading to true while fetching data
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json(); // Parse the JSON response
      if (result && result.products && result.products.length) {
        // If products are fetched, add them to the state
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false); // Set loading to false after fetching data
      }
      console.log(result); // Log the result to the console
    } catch (e) {
      console.log(e.message); // Log any errors to the console
      setLoading(false); // Set loading to false if there's an error
    }
  }

  // useEffect to fetch products when the count changes
  useEffect(() => {
    fetchProducts();
  }, [count]);

  // useEffect to disable the button if 100 products are loaded
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    setCount(count + 1); // Increase the count by 1
  };

  // useEffect to scroll to the last product when products update
  useEffect(() => {
    if (lastProductRef.current) {
      lastProductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [products]);

  // Render loading message if data is being fetched
  if (loading) {
    return (
      <div className="wrapper">
        <h4 className="text-dark bg-light rounded p-3">Fetching data...</h4>
      </div>
    );
  }

  // Render the main content
  return (
    <div className="wrapper bg-light p-3 rounded">
      <h1 text-primary>Load more data on button click</h1>
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div
                className="product"
                key={item.id}
                ref={index === products.length - 20 ? lastProductRef : null} // Attach ref to the last product
              >
                <img src={item.thumbnail} alt={item.title} />
                <h6 className="text-dark">{item.title}</h6>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button
          disabled={disableButton} // Disable the button if 100 products are loaded
          onClick={handleLoadMore} // Handle the button click
          className="btn btn-primary"
        >
          Load more products
        </button>
        {disableButton ? (
          <h6 className="m-3">You have reached the limit of 100 products</h6>
        ) : null}
      </div>
    </div>
  );
}
