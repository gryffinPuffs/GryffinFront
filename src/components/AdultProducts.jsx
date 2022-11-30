import React, { useEffect, useState } from "react";

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
              <div className="bookImg">{product.image_url}</div>
              <div className="title">Book Name: {product.name}</div>
              <div className="price">Book Price: {product.price}</div>
              <div className="description">
                Book description: {product.description}
              </div>
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
