import React, { useState, useEffect } from "react";
import { getProductById } from "./api-adapter";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct = ({ bookInfo, setBookInfo }) => {
  const navigate = useNavigate();
  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    async function fetchBook() {
      const theBook = await getProductById(bookInfo);
      setSingleBook(theBook);
    }
    fetchBook();
  }, []);

  return (
    <div id="singleProduct">
      <div className="bookImg">
        <img src={singleBook.image_url} alt="book image"></img>
        <div id="singleInfo">
          <div className="title">{singleBook.name}</div>
          <div className="author">Author: {singleBook.author}</div>
          <div className="price">Price: {singleBook.price}</div>
          <div className="description">Summary: {singleBook.description}</div>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            Add to Cart
          </button>
          <Link>Add to Wish List</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
