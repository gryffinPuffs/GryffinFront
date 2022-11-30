import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdultProducts = () => {
  const BASE_URL = "http://localhost:8080/api";
  const [allAdultProducts, setAllAdultProducts] = useState({});

  useEffect(() => {
    const getProductByAudience = async () => {
      const response = await fetch(`${BASE_URL}/product/adult`);
      const result = await response.json();
      setAllAdultProducts(result);
    };
    getProductByAudience();
  }, []);

  return (
    <div id="adultproducts">
      {allAdultProducts && allAdultProducts.length ? (
        allAdultProducts.map((product) => {
          return (
            <div id="adultBooks" key={`product-${product.id}`}>
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
        <h2>No Adult Books Available</h2>
      )}
    </div>
  );
};

export default AdultProducts;
