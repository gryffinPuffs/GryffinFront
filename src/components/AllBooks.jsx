import React, { useEffect } from "react";
import { getAllProducts } from "./api-adapter";
import Book from "./Book";

const AllBooks = ({ allBooks, setAllBooks }) => {
  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
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
              return <Book key={`allbooks-${book.id}`} book={book} />;
            })
          : null}
      </div>
    </div>
  );
};

export default AllBooks;
