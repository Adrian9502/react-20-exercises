import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log(product);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="container search-con row mx-auto d-flex justify-content-around align-items-center mb-5 bg-dark rounded mt-5 p-3 ">
      <h1 className="text-primary m-5">Dynamic Search using API</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              class="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8 d-block">
            <div className="card-body m-3">
              <h2 className="card-title fw-bold">{product.title}</h2>
              <p className="card-text">{product.description}</p>
              <h3>Price: ${product.price}</h3>

              <div className="d-flex justify-content-center mb-3 align-items-center ">
                <h5 className="d-flex p-2 bg-primary text-warning gap-1 align-items-center p-1 rounded mx-2">
                  <FaStar /> {product.rating}
                </h5>
                <h5 className="p-2 bg-primary text-light  rounded mx-2">
                  {product.category.toUpperCase()}
                </h5>
                <h5
                  className={`p-2 rounded text-light mx-2 ${
                    !product.availabilityStatus ? "bg-danger" : "bg-success"
                  }`}
                >
                  {product.availabilityStatus}
                </h5>
                <h5 className="p-2 bg-warning  rounded mx-2">
                  {product.warrantyInformation}
                </h5>
                <h5 className="p-2 bg-dark text-light rounded mx-2">
                  {product.shippingInformation}
                </h5>
              </div>
              <button onClick={() => navigate(-1)} className="btn btn-dark">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
