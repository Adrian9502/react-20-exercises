import React, { useEffect, useState } from "react";
import "./search.css";

export default function DynamicSearch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filterData =
        products && products.length
          ? products.filter(
              (item) => item.title.toLowerCase().indexOf(query) > -1
            )
          : [];
      setShowDropdown(true);
      setFilteredProducts(filterData);
      console.log(filterData);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts(data.products);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.log("Error: ", e);
      setLoading(false);
      setError(e);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(filteredProducts);

  return (
    <div className="container search-con bg-dark rounded mt-5 mb-5 p-3">
      <h1 className="text-primary m-5">Dynamic Search using API</h1>
      {loading ? (
        <h3 className="text-light">Loading .. please wait</h3>
      ) : (
        <input
          className="form-control"
          onChange={handleChange}
          value={searchParam}
          type="text"
          placeholder="Search product here..."
        />
      )}

      <div className="container">
        <div className="row">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 4).map((item, index) => (
              <div className="mt-5 col-md-3 mb-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <h6 className="card-text limit-to-2-lines">
                      {item.description}
                    </h6>
                    <h6 className="card-text">
                      Rating : <i>{item.rating}</i>
                    </h6>
                    <button className="btn btn-primary">View more</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-5 mb-4 text-light">
              <h5>Search suggestions...</h5>

              <p>
                Sofa <br />
                Dog Food <br />
                Beef Steak <br />
                Lips Stick <br /> Cat Food
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
