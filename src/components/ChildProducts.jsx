import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChildProducts = () => {
  const BASE_URL = "http://localhost:8080/api";
  const [allChildProducts, setAllChildProducts] = useState({});

  useEffect(() => {
    const getProductByAudience = async () => {
      const response = await fetch(`${BASE_URL}/product/child`);
      const result = await response.json();
      setAllChildProducts(result);
    };
    getProductByAudience();
  }, []);

  return (
    <div id="childproducts">
      <h1>Children's classics</h1>
      {allChildProducts && allChildProducts.length ? (
        allChildProducts.map((product) => {
          return (
            <div id="childBooks" key={`product-${product.id}`}>
              <div className="bookImg">
                <img src={product.image_url} alt="book image"></img>
              </div>
              <div className="title">Book Name: {product.name}</div>
              <div className="price">Book Price: {product.price}</div>
              <div className="description">
                Book description: {product.description}
              </div>
              <button>Add to Cart</button>
              <button>See Details</button>
              <br></br>
              <Link>Add to Wish List</Link>
            </div>
          );
        })
      ) : (
        <h2> No Children's Books Available</h2>
      )}
    </div>
  );
};

export default ChildProducts;
