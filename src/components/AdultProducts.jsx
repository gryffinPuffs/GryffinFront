import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";

const AdultProducts = ({ setBookInfo }) => {
  const navigate = useNavigate();
  const { bookId } = useParams();
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
            <div id="adultBooks" className="book" key={`product-${bookId}`}>
              <div className="bookImg">
                <button
                  onClick={() => {
                    setBookInfo(bookId);
                    navigate("/singleproduct/:bookId");
                  }}
                >
                  <img
                    className="prodBooks"
                    src={product.image_url}
                    alt="book image"
                  ></img>
                </button>
              </div>
              <div className="title">Title: {product.name}</div>
              <div className="author">Author: {product.author}</div>
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
