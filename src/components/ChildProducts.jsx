import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";

const ChildProducts = ({ setBookInfo }) => {
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
    <div className="childproducts">
      {/* <h1>Children's classics</h1> */}
      {allChildProducts && allChildProducts.length ? (
        allChildProducts.map((product) => {
          return (
            <div id="childBooks" key={`product-${product.id}`}>
              <div>
                <button
                  className="bookChildContainer"
                  onClick={() => {
                    setBookInfo(product.id);
                    navigate("/singleproduct/:bookId");
                  }}
                >
                  <img
                    id="childBookImg"
                    src={product.image_url}
                    alt="book image"
                  ></img>
                  <div id="childTxtItems">
                    <div id="title">Title: {product.name}</div>
                    <div id="author">Author: {product.author}</div>
                    <div>
                      <Link>Add to Wish List</Link>
                    </div>
                  </div>
                </button>
              </div>
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
