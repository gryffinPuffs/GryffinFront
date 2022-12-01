import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";

const ChildProducts = ({ bookInfo, setBookInfo }) => {
  const navigate = useNavigate();
  const [allChildProducts, setAllChildProducts] = useState({});

  useEffect(() => {
    async function fetchChildProducts() {
      const childBooks = await getProductByAudience("child");
      setAllChildProducts(childBooks);
    }
    fetchChildProducts();
  }, []);

  return (
    <div id="childproducts">
      <h1>Children's classics</h1>
      {allChildProducts && allChildProducts.length ? (
        allChildProducts.map((product) => {
          return (
            <div id="childBooks" key={`product-${product.id}`}>
              <div className="bookImg">
                <button
                  onClick={() => {
                    setBookInfo(product.id);
                    navigate("/singleproduct");
                  }}
                >
                  <img src={product.image_url} alt="book image"></img>
                </button>
              </div>
              <div className="title">Book Name: {product.name}</div>
              <div className="author">Book Author: {product.author}</div>
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
