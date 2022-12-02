import React from "react";

const Book = ({ book }) => {
  return (
    <div>
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
};
export default Book;
