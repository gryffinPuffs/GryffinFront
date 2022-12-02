import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "./components/api-adapter";
import Book from "./components/Book";
const AdminBooks = ({ bookInfo, setBookInfo, allBooks, setAllBooks }) => {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
    }
    fetchAllBooks();
  }, []);

  return (
    <div id="allBooks">
      <h2> You may Edit these books</h2>
      <div id="books">
        {allBooks && allBooks.length
          ? allBooks.map((book) => {
              return (
                <div key={`adminbooks-${book.id}`}>
                  <Book book={book} />
                  <div>Edit stuff here</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AdminBooks;
