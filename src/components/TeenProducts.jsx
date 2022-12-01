import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeenProducts = (props) => {
  const BASE_URL = "http://localhost:8080/api";
  const [singleTeenProduct, setSingleTeenProduct] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [allTeenProducts, setAllTeenProducts] = useState({});


  useEffect(() => {
    const getProductByAudience = async () => {
      const response = await fetch(`${BASE_URL}/product/teen`);
      const result = await response.json();
      setAllTeenProducts(result);
    };
    getProductByAudience();
  }, []);

  return (
    <div id="teenproducts">
      <h1>Teen Classics</h1>
      {allTeenProducts && allTeenProducts.length ? (
        allTeenProducts.map((product) => {
          return (
            <div id="teenBooks" key={`product-${product.id}`}>
              <div className="bookImg">
                <img src={product.image_url} alt="book image"></img>
              </div>
              <div className="title">Book Name: {product.name}</div>
              <div className="price">Book Price: {product.price}</div>
              <div className="description">
                Book description: {product.description}
              </div>
              <button>Add to Cart</button>
              <button
              // onClick={() => {
              //   props.setSelectedProduct({});
              // }}
              >
                See Details
              </button>
              <br></br>
              <Link>Add to Wish List</Link>
            </div>
          );
        })
      ) : (
        <h2> No Teen Books Available</h2>
      )}
    </div>
  );
};

export default TeenProducts;
