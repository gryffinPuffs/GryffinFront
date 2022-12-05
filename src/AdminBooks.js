import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getAllProducts } from "./components/api-adapter";
import Book from "./components/Book";
import { NavLink } from "react-router-dom";
const AdminBooks = ({ bookInfo, setBookInfo, allBooks, setAllBooks }) => {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
    }
    fetchAllBooks();
  }, []);

  async function handleSubmit(event) {
    try {
      const newProduct = await createProduct(
        name,
        price,
        image_url,
        image_url2,
        author,
        description,
        audience
      );
      setAllBooks([newProduct, ...allBooks]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="allBooks">
      <h2> You may Edit these books</h2>
      <NavLink className="linkBar" to="/makeproduct">
        New Product
      </NavLink>
      <div id="books">
        {allBooks && allBooks.length
          ? allBooks.map((book) => {
              return (
                <div key={`adminbooks-${book.id}`}>
                  <Book book={book} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AdminBooks;
