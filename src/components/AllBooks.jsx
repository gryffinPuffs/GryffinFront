import React, { useState, useEffect } from "react";
import { getAllProducts } from "./api-adapter";
import { Link, useNavigate } from "react-router-dom";

const AllBooks = ({ bookInfo, setBookInfo }) => {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
      console.log(allTheBooks, "allthebooks");
    }
    fetchAllBooks();
  }, []);

  return (
    <div id="allBooks">
      <h2> Find your new adventure!</h2>
      {/* add admin function for adding books here */}
      <div id="books">
        {allBooks && allBooks.length
          ? allBooks.map((book) => {
              return (
                <div key={`allbooks-${book.id}`}>
                  <button
                    onClick={() => {
                      setBookInfo(book.id);
                      navigate(`/singleproduct/${book.id}`);
                    }}
                    className="bookImg"
                  >
                    <img src={book.image_url} alt="book image"></img>
                  </button>
                  <div className="title">{book.name}</div>
                  <div className="author">Author: {book.author}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllBooks;
