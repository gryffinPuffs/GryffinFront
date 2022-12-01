import React, { useEffect, useState } from "react";
import { getProductByAudience } from "./api-adapter";
import { Link, useNavigate } from "react-router-dom";

const TeenProducts = ({ bookInfo, setBookInfo }) => {
  const navigate = useNavigate();
  const [allTeenBooks, setAllTeenBooks] = useState({});

  useEffect(() => {
    async function fetchTeenBooks() {
      const teenBooks = await getProductByAudience("teen");
      setAllTeenBooks(teenBooks);
    }
    fetchTeenBooks();
  }, []);

  return (
    <div id="teenproducts">
      <h1>Teen Classics</h1>
      {allTeenBooks && allTeenBooks.length ? (
        allTeenBooks.map((product) => {
          return (
            <div id="teenBooks" key={`product-${product.id}`}>
              <button
                onClick={() => {
                  setBookInfo(product.id);
                  navigate("/singleproduct");
                }}
              >
                <img src={product.image_url} alt="book image"></img>
              </button>
              <div className="title">Book Name: {product.name}</div>
              <div className="author">Book Author: {product.author}</div>
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
