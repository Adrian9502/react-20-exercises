import React, { useEffect } from "react";
import UseFetch from "./UseFetch";

function UseFetchTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="container rounded bg-dark mt-5">
      <h1 className="text-primary p-5">Use Fetch Custom Hook</h1>
      {pending ? <h3 className="text-light">Pending..</h3> : null}
      {error ? <h3 className="text-light"> {error}</h3> : null}
      {data && data.products && data.products.length ? (
        data.products.map((productItem) => (
          <h5 className="text-light">{productItem.title}</h5>
        ))
      ) : (
        <h3>{data}</h3>
      )}
    </div>
  );
}

export default UseFetchTest;
