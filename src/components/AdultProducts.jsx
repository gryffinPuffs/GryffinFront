import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";

const AdultProducts = ({ bookInfo, setBookInfo }) => {
  const navigate = useNavigate();
  const [allAdultBooks, setAllAdultBooks] = useState({});

  useEffect(() => {
    async function fetchAdultBooks() {
      const adultBooks = await getProductByAudience("adult");
      setAllAdultBooks(adultBooks);
    }
    fetchAdultBooks();
  }, []);

  return (
    <div id="adultproducts">
      {allAdultBooks && allAdultBooks.length ? (
        allAdultBooks.map((product) => {
          return (
            <div id="adultBooks" key={`product-${product.id}`}>
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
